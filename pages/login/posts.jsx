import "@uiw/react-markdown-preview/markdown.css"
import "@uiw/react-md-editor/markdown-editor.css"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import postService from '../../services/post.service'
import imgService from "../../services/img.service"
import DashboardDetails from "../../src/components/DashboardDetails"
import SideMenuDetails from '../../src/components/Login/SideMenuDetails'
import LoginDetails from "../../src/components/LoginDetails"

const SoreyeAsuka = 'OnigiriHardcore'
const EVA02 = '0GkMepi*r]hj'

const Login = () => {
    const [Posts, setPosts] = useState([])

    const [isLogged, setIsLogged] = useState(false)
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

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getPosts()
    }, [])

    const handleDelete = async (id, nameImage) => {
        await Promise.all([postService.deletePost(id), imgService.deleteImage(nameImage)])
        getPosts()
    }

    const handleEdit = async (id) => {
        await postService.getPost(id)
    }

    if (isLogged) {
        return (
            <DashboardDetails>
                <SideMenuDetails>
                    <Link href="/">
                        <img src="/logotipo-white.png" alt="logo" />
                    </Link>

                    <div className="menu">
                        <ul>
                            <Link href="/login">
                                <li>
                                    <i className="uil uil-file-edit-alt" /> Criar Publicações
                                </li>
                            </Link>
                            <Link href="#">
                                <li className="active">
                                    <i className="uil uil-file-edit-alt" /> Editar Publicações
                                </li>
                            </Link>
                            <Link href="/">
                                <li>
                                    <i className="uil uil-sign-out-alt" /> Sair
                                </li>
                            </Link>
                        </ul>
                    </div>
                </SideMenuDetails>

                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Modificar Publicações</h1>
                        <div className="container">
                            <table>
                                <tr>
                                    <th>Título</th>
                                    <th>Autor</th>
                                    <th>Categoria</th>
                                    <th>Data de Modificação</th>
                                    <th>Ações</th>
                                </tr>
                                {
                                    Posts.map((post) => (
                                        <tr key={post}>
                                            <a href={'/' + post.slug} target='_blank' rel="noreferrer"><td>{post.title}</td></a>
                                            <td>{post.author}</td>
                                            <td>{post.categories}</td>
                                            <td>{post.lessDate}</td>
                                            <td><button className="editar" onClick={() => handleEdit(post.id)}>Editar</button></td>
                                            <td><button className="deletar" onClick={() => handleDelete(post.id, post.image)}>Deletar</button></td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </DashboardDetails>
        )
    }
        return (
            <LoginDetails>
                <div className="container">

                    <form onSubmit={(e) => e.preventDefault()}>
                        <img src="../logotipo-white.png" alt="Logo" />
                        <input type="text" placeholder="Login" id="Login" required />

                        <input type="password" placeholder="Password" id="Password" required />

                        <button onClick={LoginAcess}>Acessar</button>
                    </form>
                </div>
            </LoginDetails>
        )

}

export default Login