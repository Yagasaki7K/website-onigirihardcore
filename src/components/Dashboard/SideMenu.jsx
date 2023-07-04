import React from "react";
import Link from "next/link";
import SideMenuDetails from "./SideMenuDetails";
import authService from "../../../services/auth.service";

const SideMenu = () => {
    function SignOut() {
        return authService.signOutGoogle();
    }

    return (
        <SideMenuDetails>
            <Link href="/">
                <img src="/logotipo-white.png" alt="logo" />
            </Link>

            <div className="menu">
                <ul>
                    <Link href="/dashboard/create">
                        <li>
                            <i className="uil uil-file-edit-alt" /> Criar
                            Publicações
                        </li>
                    </Link>
                    <Link href="/dashboard/edit">
                        <li>
                            <i className="uil uil-file-edit-alt" /> Editar
                            Publicações
                        </li>
                    </Link>
                    <div
                        href="/"
                        onClick={() => {
                            SignOut();
                            location.reload();
                        }}
                    >
                        <li>
                            <i className="uil uil-sign-out-alt" /> Sair
                        </li>
                    </div>
                </ul>
            </div>
        </SideMenuDetails>
    );
};

export default SideMenu;
