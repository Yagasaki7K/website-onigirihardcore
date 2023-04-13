import HLTV from 'hltv-api'
import Link from 'next/link'
import moment from 'moment';
import Header from '../src/components/Header'
import matches from '../server/csgo/matches.json'
import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import CSGODetails from '../src/components/CSGODetails'
import SlideDetails from '../src/components/SlideDetails';

export async function getStaticProps() {
    const news = await HLTV.getNews()
    const data = news.map((post) => ({
        title: post.title,
        description: post.description,
        link: post.link
    }))

    return {
        props: {
            data
        }
    }
}

const csgo = ({ data }) => {

    function changeToMoment(date) {
        date = moment(date).format('lll')
        return date
    }

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <Header />

            <CSGODetails>
                <div className="matches">

                    <SlideDetails>
                        <div ref={sliderRef} className="keen-slider_csgo">

                            {
                                matches && matches.map(match =>
                                    <>
                                        <div className="keen-slider__slide" key={match?.id}>
                                            <div className="match">
                                                <h1>Jogos do Mês</h1>
                                                <h4 className="subtitle">Atualizado em 02 de Janeiro</h4>
                                                <img src={match.event.logo} className="championship" />
                                                <h2>{match.event.name}</h2>
                                                <h4>{changeToMoment(match.time)} | {match.maps}</h4>
                                                <h4><img src={match.teams[0].logo} title={match.teams[0].name} alt={match.teams[0].name} /> <div className="x">X</div> <img src={match.teams[1].logo} title={match.teams[1].name} alt={match.teams[1].name} /></h4>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </SlideDetails>
                </div>

                <div className="news">
                    <h1>Últimas notícias (via HLTV)</h1>

                    <div className="content">
                        {
                            data && data.map((post, index) => (
                                <div className="news" key={index}>
                                    <Link href={post.link} noreferrer>
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                    </Link>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </CSGODetails>
        </>
    )
}

export default csgo
