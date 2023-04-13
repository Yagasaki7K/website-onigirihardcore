import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'
import postService from '../services/post.service'

// export async function getStaticProps() {
//     const response = await fetch('https://raw.githubusercontent.com/Yagasaki7K/website-onigirihardcore/main/server/index.json')
//     const data = await response.json()
//     return {
//         props: {
//             data
//         }
//     }
// }

// export async function getStaticPaths() {
//     const request = await fetch('https://raw.githubusercontent.com/Yagasaki7K/website-onigirihardcore/main/server/index.json')
//     const posts = await request.json()
//     const paths = posts.map(client => ({
//         params: { slug: client.slug.toString() },
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }

// Test using Localhost || Hidde getStaticPaths and getStaticProps and props inside on Post
// import data from '../server/index.json'

// eslint-disable-next-line react/prop-types
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
                                <Head>
                                    <title>{post.title}</title>
                                    <meta name="author" content={post.author} />
                                    {/* <meta name="author" content='Anderson "Yagasaki" Marlon' /> */}
                                    <meta name="description" content={post.description} />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:site_name" content="Onigiri Hardcore" />
                                    <meta property="og:url" content="https://onigirihardcore.vercel.app/" />
                                    <meta property="og:image" content={post.image} />
                                    <meta property="og:type" content="Website" />
                                    <meta property="og:image:width" content="1200" />
                                    <meta property="og:image:height" content="627" />
                                    <meta name="twitter:card" content="summary" />
                                    <meta name="twitter:site" content={post.title} />
                                    <meta name="twitter:creator" content={post.author} />
                                    {/* <meta name="twitter:creator" content='Anderson "Yagasaki" Marlon' /> */}
                                    <meta name="twitter:title" content={post.title} />
                                    <meta name="twitter:description" content={post.description} />
                                    <meta name="twitter:image:src" content={post.image} />
                                </Head>

                                {/* <img src={post.image}></img> */}
                                <img src={post.imageUrl} alt={post?.name}></img>
                                <section key={post.id}>
                                    <p className="block__content">{post.moreDate} | {post.author}</p>
                                    {/* <p className="block__content">{post.createdAtExtended} | {post.author}</p> */}
                                    <h1 className="title__content">{post.title}</h1>
                                    <p className="block__content" style={{ whiteSpace: "pre-wrap" }}>{post.bodyPost}</p>
                                    {/* <p className="block__content" style={{ whiteSpace: "pre-wrap" }}>{post.body}</p> */}

                                    {
                                        post.citation != '' ? (
                                            <a href={post.linkCitation} className="citation" target="_blank" rel="noreferrer">
                                                <p className="block__content">“{post.citation}”</p>
                                            </a>
                                        ) : null
                                    }

                                    {/* <p className="block__content" style={{ whiteSpace: "pre-wrap" }}>{post.body2}</p> */}

                                    {
                                        post.ytid ?
                                            <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
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
