/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'
import postService from '../services/post.service'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

// eslint-disable-next-line react/prop-types
const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
);

export async function getStaticPaths() {
    const data = await postService.getAllPosts();
    const paths = data.docs.map((doc) => ({ params: { slug: doc.data().slug } }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps() {
    const data = await postService.getAllPosts();
    const postData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, date: String(doc.data().date) }));

    return {
        props: {
            postData,
        },
        revalidate: 60, // Add revalidation time if needed
    };
}

const Post = ({ postData }) => {
    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        dontCopy()
    }, [])

    const dontCopy = () => {
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
    }

    return (
        <>
            <Header />

            <SlugDetails>
                {
                    // eslint-disable-next-line react/prop-types
                    postData && postData.map((post, index) => (
                        post.slug === slug ? (
                            <div key={index}>
                                <NextSeo
                                    title={post.title}
                                    description={post.description}
                                    canonical={`https://yagasaki.dev/`}
                                    openGraph={{
                                        url: 'https://yagasaki.dev/',
                                        title: post.title,
                                        description: post.description,
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
                                        handle: '@Yagasaki7K',
                                        site: '@Yagasaki7K',
                                        cardType: 'summary_large_image',
                                    }}
                                />
                                <Head>
                                    <title>{post.title + ' | Onigiri Hardcore'}</title>
                                </Head>

                                {post.imageUrl && (<Image src={post.imageUrl} alt={post.title} width={1024} height={768} />)}

                                <section key={post.id}>
                                    <p className="block__content">{post.moreDate} | {post.categories === 'Movies' ? 'Filmes & Séries' : null || post.categories === 'Games' ? 'Video Games' : null || post.categories === 'Technologies' ? 'Ciência & Tecnologia' : null || post.categories === 'Development' ? '4Devs' : null || post.categories === 'Animes' ? 'Animes & HQs' : null} | {post.author}</p>

                                    <h1 className="title__content">{post.title}</h1>

                                    <div className="image__content"><MarkdownPreview source={post.bodyPost} /></div>

                                    {post.citation != '' ? (
                                        <a href={post.linkCitation} className="citation" target="_blank" rel="noreferrer">
                                            <p className="block__content">“{post.citation}”</p>
                                        </a>
                                    ) : null}

                                    <p className="keepUpdate">Mantenha-se atualizado sobre todas as novidades do <a href="/">Onigiri Hardcore</a> e siga-nos também no <a href="https://twitter.com/OHNewsOficial" target='_blank' rel="noreferrer">Twitter</a> para não perder nenhum destaque da semana!</p>

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
