import React, { useEffect, useState } from 'react'
// import post from '../../server/index.json'

import SlideDetails from './SlideDetails'
import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import postService from '../../services/post.service'



const Slide = () => {

    const [Posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const posts = Posts.sort().reverse().slice(0, 3)

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
            <div ref={refCallback} className="keen-slider">
                {posts && posts.map(post => (
                    <div className="keen-slider__slide" key={post?.id}>
                        <a href={post?.slug}>
                            <img src={post.imageUrl} alt={post?.name} />
                            {/* <img src={post?.image} alt={post?.title}/> */}
                        </a>
                        <div className="slider-description">
                            <div className="slide-tag">
                                <span className="latest">HOT NEWS 🔥</span>
                                {/* <span className="tag">{posts?.category.title}</span> */}
                                <span className="date">{post?.lessDate}</span>
                                {/* <span className="date">{post?.createdAt}</span> */}
                                <span> - </span>
                                <span className="author">
                                    <a href="#">{post.author}</a>
                                    {/* <a href="https://yagasaki.vercel.app/" target="_blank" rel="noreferrer">Anderson Marlon</a> */}
                                </span>
                            </div>

                            <a href={post?.slug}><h1>{post?.title}</h1></a>
                            <p>{post?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SlideDetails>
    )
}

export default Slide
