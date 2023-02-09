import { useState } from 'react'
import SideMenu from '../src/components/Login/SideMenu'
import LoginDetails from "../src/components/LoginDetails"
import DashboardDetails from "../src/components/DashboardDetails"
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const SoreyeAsuka = 'OnigiriHardcore'
const EVA02 = '0GkMepi*r]hj'

const MarkdownEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

const Login = () => {    

    /*       Form resources        */
    const [OniAuthor, setOniAuthor] = useState('')
    const [OniTitle, setOniTitle] = useState('')
    const [OniSmalltitle, setOniSmalltitle] = useState('')
    const [OniDescription, setOniDescription] = useState('')
    const [OniImage, setOniImage] = useState('')
    const [OniCitation, setOniCitation] = useState('')
    const [OniLinkCitation, setOniLinkCitation] = useState('')
    const [OniYtid, setOniYtid] = useState('')

    const [isLogged, setIsLogged] = useState(false)
    const [value, setValue] = useState('# Corpo da Publicação')
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

    function collectData() {
        const formAuthor = document.getElementById('author')
        const resultAuthor = formAuthor.options[formAuthor.selectedIndex].text
        setOniAuthor(resultAuthor)
        
        const formTitle = document.getElementById('title')
        const resultTitle = formTitle.value
        setOniTitle(resultTitle)

        const formSmalltitle = document.getElementById('smarttitle')
        const resultSmalltitle = formSmalltitle.value
        setOniSmalltitle(resultSmalltitle)

        const formDescription = document.getElementById('description')
        const resultDescription = formDescription.value
        setOniDescription(resultDescription)
    }

    if (isLogged) {
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
                                        <option value={"Anderson 'Yagasaki' Marlon"}>Anderson "Yagasaki" Marlon</option>
                                    </select>
                                </div>

                                <div className="item">
                                    <label htmlFor="title">Título da Publicação*: </label>
                                    <input type="text" name="title" id="title" placeholder="Título da Publicação" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="title">Título Curto*: </label>
                                    <input type="text" name="title" id="smarttitle" className="form-control" placeholder="Título Curto da Publicação (Max.55)" maxLength={55} required />
                                </div>

                                <div className="item">
                                    <label htmlFor="description">Descrição da Publicação*: </label>
                                    <textarea name="description" id="description" maxLength={126}
                                        placeholder="Descrição da Publicação (Max.126)" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="image">Imagem da Publicação*: </label>
                                    <input type="file" name="image" id="image" required />
                                </div>

                                <div className="item-markdown">
                                    <label htmlFor="body">Conteúdo da Publicação*: </label>
                                    <MarkdownEditor height={300} value={value} onChange={setValue} />
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

                                <button>Enviar</button>
                                <button>Limpar</button>
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