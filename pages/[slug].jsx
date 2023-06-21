import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'
import postService from '../services/post.service'
import { NextSeo } from 'next-seo';
import Image from 'next/image'

import dynamic from 'next/dynamic'

// eslint-disable-next-line react/prop-types

const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
);

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    const [Post, setPost] = useState([])

    useEffect(() => {
        getPost()
    }, [])

    const getPost = async () => {
        const data = await postService.getAllPosts()
        setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    return (
        <>
            <Header />

            <SlugDetails>
                {
                    // eslint-disable-next-line react/prop-types
                    Post && Post.map((post, index) => (
                        post.slug === slug ? (
                            <div key={index}>
                                <NextSeo
                                    title={post.title}
                                    description={post?.description}
                                    canonical={`https://onigirihardcore.com.br/${slug}`}
                                    openGraph={{
                                        url: 'https://onigirihardcore.com.br/' + post.slug,
                                        title: post.title,
                                        description: post?.description,
                                        images: [
                                            {
                                                url: post.imageUrl,
                                                width: 460,
                                                height: 460,
                                                alt: post.title,
                                                type: 'image/jpeg' || 'image/png',
                                            }
                                        ],
                                        siteName: 'Onigiri Hardcore',
                                    }}
                                    twitter={{
                                        handle: '@OnigiriHardcore',
                                        site: '@OnigiriHardcore',
                                        cardType: 'summary_large_image',
                                    }}
                                />

                                {post.imageUrl && (<Image src={post.imageUrl} alt={post?.name} width={1300} height={480} />)}

                                <section key={post.id}>
                                    <p className="block__content">{post.moreDate} | {post.categories === 'Movies' ? 'Filmes & Séries' : null || post.categories === 'Games' ? 'Video Games' : null || post.categories === 'Technologies' ? 'Tecnologias' : null || post.categories === 'Animes' ? 'Animes & HQs' : null} | {post.author}</p>

                                    <h1 className="title__content">{post.title}</h1>
                                    <MarkdownPreview source={post.bodyPost} />

                                    {
                                        post.citation != '' ? (
                                            <a href={post.linkCitation} className="citation" target="_blank" rel="noreferrer">
                                                <p className="block__content">“{post.citation}”</p>
                                            </a>
                                        ) : null
                                    }

                                    {
                                        post.ytid ?
                                            <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                    }
                                </section>
                            </div>
                        ) : (
                            null
                        )
                    ))
                }
            </SlugDetails>
            <Footer />
        </>
    )
}
export default Post
