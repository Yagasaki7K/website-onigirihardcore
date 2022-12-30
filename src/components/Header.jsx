import HeaderDetails from './HeaderDetails'

export default function Header() {
    return (
        <HeaderDetails>
            <div className="header">
                <a href="/" className="logotipo">
                    <img src="/logotipo-white.png" className="logotipo" alt="logo" />
                </a>
                <a href="/">
                    <img src="/anuncio.png" className="advice" alt="Anuncio" />
                </a>
            </div>

            <div className="navigation">
                <ul id="ul-menu">
                    <li className="burguer">
                        <a href="#"><i className="uil uil-bars"></i></a>
                    </li>
                    <span id="item-menu">
                        <li>
                            <a href="/noticias">Notícias</a>
                        </li>
                        <li>
                            <a href="/#animes">Animes {`&`} HQ{`'`}s</a>
                        </li>
                        <li>
                            <a href="/#animes">Jogos</a>
                        </li>
                        <li>
                            <a href="/#news">Tecnologia</a>
                        </li>
                        <li>
                            <a href="https://onigiri-hardcore.blogspot.com/" target="_blank" rel="noreferrer">
                                OH: Arquivos
                            </a>
                        </li>
                        <li>
                            <a href="https://kalify.vercel.app" target="_blank" rel="noreferrer">
                                Kalify Inc
                            </a>
                        </li>
                    </span>
                </ul>
            </div>
        </HeaderDetails>
    )
}
