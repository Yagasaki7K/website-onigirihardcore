import React from 'react'
import Link from 'next/link'
import SideMenuDetails from './SideMenuDetails'

const SideMenu = () => {
    return (
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
                    <Link href="/login/posts">
                        <li>
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
    )
}

export default SideMenu
