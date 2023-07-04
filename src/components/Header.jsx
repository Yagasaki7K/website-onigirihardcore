import Link from "next/link";
import { useState } from "react";
import HeaderDetails from "./HeaderDetails";
import authService from "../../services/auth.service";

const Header = () => {
    const [value, setValue] = useState(true);

    async function checkAuth() {
        return await authService.stateAuthentication().catch(() => { setValue(false) });
    }
    checkAuth();
    return (
        <HeaderDetails>
            <div className="header">
                <Link href="/" className="logotipo">
                    <img
                        src="/logotipo-white.png"
                        className="logotipo"
                        alt="logo"
                    />
                </Link>
                <Link href="/">
                    <img src="/anuncio.png" className="advice" alt="Anuncio" />
                </Link>
            </div>

            <div className="navigation">
                <ul id="ul-menu">
                    <div className="burguer">
                        <li>
                            <Link href="/">Início</Link>
                        </li>
                        <li>
                            <Link href="/noticias">Notícias</Link>
                        </li>
                        <li>
                            <Link
                                href="https://kalify.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Kalify Inc
                            </Link>
                        </li>
                    </div>
                    <span id="item-menu">
                        <li>
                            <Link href="/">Início</Link>
                        </li>
                        <li>
                            <Link href="/noticias">Notícias</Link>
                        </li>
                        <li>
                            <Link href="/#animes">
                                Animes {`&`} HQ{`'`}s
                            </Link>
                        </li>
                        <li>
                            <Link href="/csgo">CSGO ~ HLTV News</Link>
                        </li>
                        <li>
                            <Link
                                href="https://onigiri-hardcore.blogspot.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                OH: Arquivos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://kalify.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Kalify Inc
                            </Link>
                        </li>
                        {value === true ? (
                            <li>
                                <Link href="/dashboard/create">Dashbord</Link>
                            </li>
                        ) : (
                            <li>
                                <Link href="/login">Acesso</Link>
                            </li>
                        )}
                    </span>
                </ul>
            </div>
        </HeaderDetails>
    );
};

export default Header;
