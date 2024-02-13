import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'
import postService from '../services/post.service'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Head from 'next/head'

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
        useEffect(() => {
            const preventRightClick = (e) => {
                e.preventDefault();
            };

            const preventCopyPaste = (e) => {
                if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86)) {
                    e.preventDefault();
                }
            };

            const disableTextSelection = () => {
                document.body.style.userSelect = 'none';
            };

            document.addEventListener('contextmenu', preventRightClick);
            document.addEventListener('keydown', preventCopyPaste);
            disableTextSelection();

            return () => {
                document.removeEventListener('contextmenu', preventRightClick);
                document.removeEventListener('keydown', preventCopyPaste);
                document.body.style.userSelect = '';
            };
        }, []);

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
                                    <title>{post.title + ' | Onigiri Hardcore'}</title>
                                    <meta name="description" content={post.description} />
                                    <meta
                                        name="keywords"
                                        content="anime, tecnologia, desenvolvimento, mangá, séries, filmes, cultura pop, otaku, programação, inovação, entretenimento, ficção, notícias, lançamentos, noticias, ciência, hq, dev, video, games, xbox, psp, psn, ps4, playstation, sony, series, x, twitter, noticias, pop, nerd, geek"
                                    />

                                    <meta property="og:title" content={'Onigiri Hardcore | ' + post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta
                                        property="og:keywords"
                                        content="anime, tecnologia, desenvolvimento, mangá, séries, filmes, cultura pop, otaku, programação, inovação, entretenimento, ficção, notícias, lançamentos, noticias, ciência, hq, dev, video, games, xbox, psp, psn, ps4, playstation, sony, series, x, twitter, noticias, pop, nerd, geek"
                                    />
                                    <meta property="og:type" content="website" />
                                    <meta
                                        property="og:image"
                                        content={post.imageUrl}
                                    />
                                    <meta property="og:site_name" content={'Onigiri Hardcore | ' + post.title} />

                                    <meta name="twitter:card" content="summary_large_image" />
                                    <meta name="twitter:title" content={'Onigiri Hardcore | ' + post.title} />
                                    <meta name="twitter:description" content={post.description} />
                                    <meta name="twitter:image:alt" content={'Onigiri Hardcore | ' + post.title} />
                                </Head>

                                {post.imageUrl && (<Image src={post.imageUrl} alt={post.name} width={1300} height={480} />)}

                                <section key={post.id}>
                                    <p className="block__content">{post.moreDate} | {post.categories === 'Movies' ? 'Filmes & Séries' : null || post.categories === 'Games' ? 'Video Games' : null || post.categories === 'Technologies' ? 'Ciência & Tecnologia' : null || post.categories === 'Development' ? '4Devs' : null || post.categories === 'Animes' ? 'Animes & HQs' : null} | {post.author}</p>

                                    <h1 className="title__content">{post.title}</h1>

                                    <div className="image__content"><MarkdownPreview source={post.bodyPost} /></div>

                                    {post.citation != '' ? (
                                        <a href={post.linkCitation} className="citation" target="_blank" rel="noreferrer">
                                            <p className="block__content">“{post.citation}”</p>
                                        </a>
                                    ) : null}

                                    <p>Mantenha-se atualizado sobre todas as novidades do <a href="/">Onigiri Hardcore</a> e siga-nos também no <a href="https://twitter.com/OHNewsOficial" target='_blank' rel="noreferrer">Twitter</a> para não perder nenhum destaque da semana!</p>

                                    {post.ytid ?
                                        <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                                </section>
                                <Footer />
                            </div>

                        ) : (
                            null
                        )
                    ))
                }
            </SlugDetails>
        </>
    )
}
export default Post
