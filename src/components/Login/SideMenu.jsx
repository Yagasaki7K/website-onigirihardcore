import React from 'react'
import Link from 'next/link'
import SideMenuDetails from './SideMenuDetails'

const SideMenu = () => {
    return (
        <SideMenuDetails>
            <Link href="/backoffice/login">
                <img src="/logotipo-white.png" alt="logo" />
            </Link>

            <div className="menu">
                <ul>
                    <Link href="#publi">
                        <li>
                            <i className="uil uil-file-edit-alt" /> Publicações
                        </li>
                    </Link>
                    {/* <Link href="#stats">
                        <li>
                            <i className="uil uil-arrow-growth" /> Estatísticas
                        </li>
                    </Link> */}
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