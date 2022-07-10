import React from 'react'
import SlideDetails from './SlideDetails'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const Slide = () => {

    const [refCallback] = useKeenSlider({ loop: true },
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
                    }, 5000)
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
        <SlideDetails>
            <div ref={refCallback} className="keen-slider">
                <div className="keen-slider__slide">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" />

                    <div className="slider-description">
                        <div className="slide-tag">
                        <span className="latest">HOT NEWS 🔥</span>
                        <span className="tag">JOGOS</span>
                        <span className="date">20/12/2018</span>
                        <span> - </span>
                        <span className="author">
                            <a href="">Anderson Marlon</a></span>
                        </div>
                        <h1>
                            <a href="#">
                            Jump Force - Midoriya é o primeiro personagem de
                            My Hero Academia confirmado no jogo
                            </a>
                        </h1>
                        <p>
                            <a href="#">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum minus tenetur pariatur. Cupiditate temporibus, molestias natus earum libero cum eligendi quo non dicta pariatur similique iure ipsa eum delectus adipisci.
                            </a>
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <img src="https://web.archive.org/web/20181228113915im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/y6IHUKleghkKuNid5DYbsRmcAyZ-3-560x416.jpg" />

                    <div className="slider-description">
                        <div className="slide-tag">
                        <span className="latest">HOT NEWS 🔥</span>
                        <span className="tag">JOGOS</span>
                        <span className="date">20/12/2018</span>
                        <span> - </span>
                        <span className="author">
                            <a href="">Anderson Marlon</a></span>
                        </div>
                        <h1>
                            <a href="#">
                            Spiderman de PS4 incluirá traje de Tobey Maguire em atualização
                            </a>
                        </h1>
                        <p>
                            <a href="#">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum minus tenetur pariatur. Cupiditate temporibus, molestias natus earum libero cum eligendi quo non dicta pariatur similique iure ipsa eum delectus adipisci.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </SlideDetails>
    )
}

export default Slide