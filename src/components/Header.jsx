import HeaderDetails from './HeaderDetails'
import Link from 'next/link'
import matches from '../../server/csgo/matches.json'
import { useKeenSlider } from 'keen-slider/react'
import SlideDetails from './SlideDetails'
import moment from 'moment';

export default function Header() {

    const animation = { duration: 50000, easing: (t) => t }

    function changeToMoment(date) {
        date = moment(date).format('lll')
        return date
    }

    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

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
                            <Link href="/#news">Tecnologia</Link>
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

            <SlideDetails>
                <div ref={sliderRef} className="keen-slider_navigation">
                    {
                        matches && matches.map(match =>
                            <div className="keen-slider__slide" key={match?.id}>
                                <div className="match">
                                    <Link href="/csgo"><img src={match.event.logo} /> | {match.event.name} | {match.maps} | {changeToMoment(match.time)} | <img src={match.teams[0].logo} alt={match.teams[0].name} /> {match.teams[0].name} x {match.teams[1].name} <img src={match.teams[1].logo} alt={match.teams[1].name} /></Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </SlideDetails>
        </HeaderDetails>
    )
}
