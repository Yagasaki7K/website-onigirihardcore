import { useState } from 'react'
import LoginDetails from "../../src/components/LoginDetails"
import DashboardDetails from "../../src/components/DashboardDetails"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import SideMenuDetails from '../../src/components/Login/SideMenuDetails'
import Link from 'next/link'

const SoreyeAsuka = 'OnigiriHardcore'
const EVA02 = '0GkMepi*r]hj'

const Login = () => {

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
                            <h1>xxxxxx</h1>
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
