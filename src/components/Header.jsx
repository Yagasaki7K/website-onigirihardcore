import Link from 'next/link';
import HeaderDetails from './HeaderDetails';

const Header = () => {

    return (
        <HeaderDetails>
            <div className="header">
                <Link href="/" className="logotipo">
                    <img src="/logotipo-white.png" className="logotipo" alt="logo" />
                </Link>
                <Link href="/">
                    <img src="/anuncio.png" className="advice" alt="Anuncio" />
                </Link>
            </div>

            <div className="navigation">
                <ul id="ul-menu">
                    <li className="burguer">
                        <Link href="#"><i className="uil uil-bars"></i></Link>
                    </li>
                    <span id="item-menu">
                        <li>
                            <Link href="/noticias">Notícias</Link>
                        </li>
                        <li>
                            <Link href="/#animes">Animes {`&`} HQ{`'`}s</Link>
                        </li>
                        <li>
                            <Link href="/csgo">CSGO ~ HLTV News</Link>
                        </li>
                        <li>
                            <Link href="https://onigiri-hardcore.blogspot.com/" target="_blank" rel="noreferrer">
                                OH: Arquivos
                            </Link>
                        </li>
                        <li>
                            <Link href="https://kalify.vercel.app" target="_blank" rel="noreferrer">
                                Kalify Inc
                            </Link>
                        </li>
                    </span>
                </ul>
            </div>
        </HeaderDetails>
    )
}

export default Header
