import { useState, useEffect } from 'react'
import LoginDetails from "../../src/components/LoginDetails"
import postService from '../../services/post.service'
import DashboardDetails from "../../src/components/DashboardDetails"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import SideMenuDetails from '../../src/components/Login/SideMenuDetails'
import Link from 'next/link'

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

    function getCheckBoxPosts(){
        // Get all checkboxs
        const checkPosts = document.querySelectorAll('checkboxes')

        // Add an event that will catch each checkbox
        checkPosts.forEach((event) => {
            event.addEventListener('click', () => {
                // Get the row associated with this checkbox
                console.log('teste')
                const rowPosts = closest('tr')
                
                // Get the data from the cells in the row
                const title = rowPosts.getElementsByTagName('td')[0].innerText
                const author = rowPosts.getElementsByTagName('td')[1].innerText

                //Show the data
                console.log(title, author)
            })
        })
    }

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    if (isLogged === true) {
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
                        <table onChange={getCheckBoxPosts}>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>Data de Criação</th>
                                <th>Data de Modificação</th>
                                <th>Ações</th>
                            </tr>
                            {
                                Posts.slice(0, 4).map((post) =>(
                                    <tr key={post}>
                                        <td><input type="checkbox" id="checkboxes" /></td>
                                        <td>{post.title}</td>
                                        <td>{post.author}</td>
                                        <td>{post.categories}</td>
                                        <td>{post.lessDate}</td>
                                    </tr>
                                ))
                            }
                        </table> 
                        </div>
                    </div>
                </div>
            </DashboardDetails>
        )
    } else {
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
}

export default Login
