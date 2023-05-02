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
                                    {/* Meta tags relacionadas ao SEO */}
                                    <title>{post.title}</title>
                                    <meta name="author" content={post.author} />
                                    <meta name="description" content={post.description} />

                                    {/* Meta tags relacionadas ao Open Graph */}
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:image" content={post.image ? post.image : "https://i.imgur.com/VoOogmx.png"} />
                                    <meta property="og:image:width" content="1200" />
                                    <meta property="og:image:height" content="627" />
                                    <meta property="og:site_name" content="Onigiri Hardcore" />
                                    <meta property="og:type" content="Website" />
                                    <meta property="og:url" content="https://onigirihardcore.vercel.app/" />

                                    {/* Meta tags relacionadas ao Twitter Card */}
                                    <meta name="twitter:card" content="summary" />
                                    <meta name="twitter:title" content={post.title} />
                                    <meta name="twitter:description" content={post.description} />
                                    <meta name="twitter:image:src" content={post.image ? post.image : "https://i.imgur.com/VoOogmx.png"} />
                                    <meta name="twitter:site" content={post.title} />
                                    <meta name="twitter:creator" content={post.author} />

                                    {/* Exemplo de autor pré-definido */}
                                    <meta name="author" content={post.author} />
                                </Head>

                                {/* <img src={post.image}></img> */}
                                <img src={post.imageUrl} alt={post?.name}></img>
                                <section key={post.id}>
<<<<<<< HEAD
                                    <p className="block__content">{post.moreDate} | {post.categories === 'Movies' ? 'Filmes & Séries' : null || post.categories === 'Games' ? 'Video Games' : null || post.categories === 'Technologies' ? 'Tecnologias' : null || post.categories === 'Animes' ? 'Animes & HQs' : null} | {post.author}</p>
=======
                                    <p className="block__content">{post.moreDate} | {post.categories === 'Movies' ? 'Filmes & Séries' : post.categories || post.categories === 'Games' ? 'Jogos' : post.categories || post.categories === 'Games' ? 'Video Games' : post.categories || post.categories === 'Technologies' ? 'Tecnologias' : post.categories} | {post.author}</p>
>>>>>>> Responsive
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
