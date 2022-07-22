import React, { useEffect, useState } from 'react'
import groq from 'groq'
import SlideDetails from './SlideDetails'
import 'keen-slider/keen-slider.min.css'
import client from '../database'
import { useKeenSlider } from 'keen-slider/react'
import getImages from './services/getImages'
import formatDate from './services/formatDate'

const Slide = () => {

    const [firstNews, setFirstNews] = useState([])

    useEffect(() => {
        client
          .fetch(
            groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)  {
            title,
            body,
            description,
            slug,
            publishedAt,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            }
          }`
          )
          .then((data) => {
            setFirstNews(data[0])
            })
      }, [!firstNews.length])

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
                    }, 50000)
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
                {firstNews.mainImage && firstNews.mainImage.asset && (
                <div className="keen-slider__slide">
                    <a href={firstNews?.slug.current}>
                        <img src={firstNews?.mainImage.asset.url} alt={firstNews?.title}/>
                    </a>
                    <div className="slider-description">
                        <div className="slide-tag">
                            <span className="latest">HOT NEWS 🔥</span>
                            {/* <span className="tag">{firstNews?.category.title}</span> */}
                            <span className="date">{formatDate(firstNews?.publishedAt)}</span>
                            <span> - </span>
                            <span className="author">
                                <a href="https://yagasaki.vercel.app/" target="_blank">Anderson Marlon</a>
                            </span>
                        </div>

                        <a href={firstNews?.slug.current}><h1>{firstNews?.title}</h1></a>
                        <p>{firstNews?.description}</p>
                        </div>
                </div>
                )}
            </div>
        </SlideDetails>
    )
}

export default Slide