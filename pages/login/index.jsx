import { useState } from 'react'
import SideMenu from '../../src/components/Login/SideMenu'
import LoginDetails from "../../src/components/LoginDetails"
import DashboardDetails from "../../src/components/DashboardDetails"
import postService from '../../services/post.service'
import { storage } from '../../client'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import dynamic from "next/dynamic"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"

const SoreyeAsuka = 'OnigiriHardcore'
const EVA02 = '0GkMepi*r]hj'

const MarkdownEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

const Login = () => {
    const [lessDate, setLessDate] = useState('')
    const [moreDate, setMoreDate] = useState('')
    const [slug, setSlug] = useState('')

    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')
    const [citation, setCitation] = useState('')
    const [linkCitation, setLinkCitation] = useState('')
    const [ytid, setYtid] = useState('')

    const [isLogged, setIsLogged] = useState(false)
    const [bodyPost, setBodyPost] = useState('# Corpo da Publicação')
    const Lgn = SoreyeAsuka
    const Pswd = EVA02

    function LoginAcess() {
        const getLogin = document.getElementById('Login').value
        const getPswd = document.getElementById('Password').value

        if (getLogin === Lgn && getPswd === Pswd) {
            setIsLogged(true)
        } else {
            alert('Login ou senha estão incorretos')
        }
    }

    async function sendData() {
        const NewPosts = {
            lessDate,
            moreDate,
            slug,
            author,
            title,
            description,
            categories,
            bodyPost,
            image,
            imageUrl: url,
            citation,
            linkCitation,
            ytid,
        }

        if (!author || !title || !description || !url || !categories) {
            alert('Por favor, preencha todos os campos')
        } else {
            await (postService.addPost(NewPosts))

            alert('Publicação criada com sucesso')
            location.assign("/")
        }
    }

    function TitleToSlug() {

        let title = document.getElementById('title').value;

        let slug = title.toLowerCase().replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

        setSlug(slug)
    }

    function collectData() {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        const resultDate = `${day}/${month}/${year}`
        const resultMoreDate = `${day} de ${monthNames[date.getMonth()]} de ${year + 1}`
        setLessDate(resultDate)
        setMoreDate(resultMoreDate)

        //

        const formAuthor = document.getElementById('author').value
        setAuthor(formAuthor)

        const formTitle = document.getElementById('title').value
        setTitle(formTitle)

        const formDescription = document.getElementById('description').value
        setDescription(formDescription)

        const formCategories = document.getElementById('categories')
        const resultCategories = formCategories.options[formCategories.selectedIndex].text
        setCategories(resultCategories)

        const formCitation = document.getElementById('citation').value
        setCitation(formCitation)

        const formLinkCitation = document.getElementById('linkcitation').value
        setLinkCitation(formLinkCitation)

        const formYtid = document.getElementById('ytid').value
        setYtid(formYtid)

        TitleToSlug()
    }

    function getImage(event) {
        const file = event.target.files[0]

        if(!file) return

        setImage(file.name)

        const storageRef = ref(storage, `/images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                console.log(percent)
                /* show upload percentage? */
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setUrl(url)
                })
            }
        )
    }

    if (isLogged === true) {
        return (
            <DashboardDetails>
                <SideMenu />

                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Criar Publicações</h1>

                        <div className="form-group">
                            <form onSubmit={(e) => e.preventDefault()} onChange={() => collectData()}>

                                <div className="item">
                                    <label htmlFor="author">Autor*: </label>
                                    <select id="author">
                                        <option value={"Anderson 'Yagasaki' Marlon"}>Anderson Marlon</option>
                                    </select>
                                </div>

                                <div className="item">
                                    <label htmlFor="title">Título da Publicação*: </label>
                                    <input type="text" name="title" id="title" placeholder="Título da Publicação" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="description">Descrição da Publicação*: </label>
                                    <textarea name="description" id="description" maxLength={126}
                                        placeholder="Descrição da Publicação (Max.126)" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="categories">Categoria da Publicação*: </label>
                                    <select id="categories">
                                        <option value={"Animes"}>Animes</option>
                                        <option value={"Games"}>Games</option>
                                        <option value={"Movies"}>Movies/Séries</option>
                                    </select>
                                </div>

                                <div className="item">
                                    <label htmlFor="image">Imagem da Publicação*: </label>
                                    <input type="file" name="image" id="image" onChange={getImage} required />
                                </div>

                                <div className="item-markdown">
                                    <label htmlFor="body">Conteúdo da Publicação*: </label>
                                    <MarkdownEditor height={300} value={bodyPost} onChange={setBodyPost} />
                                </div>

                                <div className="item">
                                    <label htmlFor="citation">Citação de Twitter: </label>
                                    <textarea name="citation" id="citation" placeholder="Uma citação que foi encontrada no Twitter ou em outra fonte" />
                                </div>

                                <div className="item">
                                    <label htmlFor="linkcitation">Link da Citação: </label>
                                    <input name="linkcitation" id="linkcitation" placeholder="https://twitter.com/Yagasaki7K/example" />
                                </div>

                                <div className="item">
                                    <label htmlFor="ytid">ID do Youtube: </label>
                                    <input name="ytid" id="ytid" placeholder="RfiKg_Sfg-o" />
                                </div>

                                <button onClick={sendData} className='sendbtn'>Enviar</button>
                                <button className='clrbtn'>Limpar</button>
                            </form>
                        </div>
                    </div>

                    <div className="stats" id="stats">
                        <h1>Estatísticas Gerais</h1>
                    </div>
                </div>


            </DashboardDetails>
        )
    } else {
        return (
            <LoginDetails>
                <div className="container">

                    <form onSubmit={(e) => e.preventDefault()}>
                        <img src="logotipo-white.png" alt="Logo" />
                        <input type="text" placeholder="Login" id="Login" required />

                        <input type="password" placeholder="Password" id="Password" required />

                        <button onClick={LoginAcess}>Acessar</button>
                    </form>
                </div>
            </LoginDetails>
        )
    }
}

export default Login
