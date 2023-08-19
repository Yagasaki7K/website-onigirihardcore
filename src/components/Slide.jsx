import React, { useEffect, useState } from 'react'
// import post from '../../server/index.json'

import 'keen-slider/keen-slider.min.css'
import SlideDetails from './SlideDetails'

import { useKeenSlider } from 'keen-slider/react'
import postService from '../../services/post.service.js'
import Head from 'next/head'
import { SkeletonSlide } from './Skeleton/SkeletonSlide'


export const Slide = () => {
    const [Posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setLoading(false);
    }

    const slidePosts = Posts.sort().slice(0, 5)

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
                    }, 3000)
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
            {loading ? (
                <SkeletonSlide/>
            ) : (
                <div ref={refCallback} className="keen-slider">
                    {slidePosts && slidePosts.map(post => (
                        <div className="keen-slider__slide" key={post?.id}>
                            <a href={post?.slug}>
                                <img src={post.imageUrl} alt={post?.name} loading='lazy' />
                            </a>
                            <div className="slider-description">
                                <div className="slide-tag">
                                    <Head>
                                        <title>{post.title}</title>
                                        <meta name="description" content={post?.description} key="desc" />
                                        <meta property="og:title" content={post?.title} />
                                        <meta property="og:description" content={post?.description} />
                                        <meta property="og:image" content={post.imageUrl} />
                                        <meta name="author" content={post.author} />
                                    </Head>

                                    <span className="latest">HOT NEWS 🔥</span>

                                    <span className="tag">{post.categories === 'Movies' ? <span className="movies">Filmes & Séries</span> : null || post.categories === 'Games' ? <span className="games">Video Games</span> : null || post.categories === 'Technologies' ? <span className="tecnologies">Ciência & Tecnologia</span> : null || post.categories === 'Animes' ? <span className="animes">Animes & HQs</span> : null || post.categories === 'Development' ? <span className="development">4Devs</span> : null}</span>

                                    <span className="date">{post?.lessDate}</span>
                                    <span> - </span>
                                    <span className="author">
                                        {
                                            post.author === "Anderson 'Yagasaki' Marlon" ? <a href='https://yagasaki.dev/about' target='_blank' rel="noreferrer">Anderson &apos;Yagasaki&apos; Marlon</a> : null
                                        }
                                    </span>
                                </div>

                                <a href={post?.slug}><h1>{post?.title}</h1></a>
                                <p>{post?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </SlideDetails>
    )
}
