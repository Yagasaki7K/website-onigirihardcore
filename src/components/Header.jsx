import HeaderDetails from './HeaderDetails'
import HLTV from 'hltv-api'
import Ticker from 'react-ticker'

export async function getStaticProps() {
    const matches = await HLTV.getMatches()
    const dataMatches = matches.map((post, index) => ({
        championship: post.event.name,
        championshipLogo: post.event.logo,
        maps: post.maps,
        teamFirstName: post.teams[0].name || null,
        teamFirstLogo: post.teams[0].logo || null,
        teamSecondName: post.teams[1].name || null,
        teamSecondLogo: post.teams[1].logo || null
    }))

    return {
        props: {
            dataMatches
        }
    }
}

export default function Header({ dataMatches }) {

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
                            <a href="/#news">Tecnologia</a>
                        </li>
                        <li>
                            <a href="/csgo">CSGO ~ HLTV News</a>
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

            {
                dataMatches && dataMatches.map((post, index) => (
                    <Ticker>
                        {() => (
                            <p key={index}>
                                <img src={post.championshipLogo} className="championship" /> | <img src={post.teamFirstLogo} />
                                {post.teamFirstName} x {post.teamSecondName}
                            </p>
                        )}
                    </Ticker>
                ))
            }
        </HeaderDetails>
    )
}
