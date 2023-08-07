import { useEffect, useState } from 'react'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import FullNewsDetails from '../src/components/FullNewsDetails'
import postService from '../services/post.service'
import { NextSeo } from 'next-seo';
// import dynamic from 'next/dynamic'

// const analyticsFirebase = dynamic(() => import('../client'),
//     { ssr: false }
// );

const FullNews = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
        // const analytics = analyticsFirebase;
        // analytics.logEvent('acesso_pagina', { page: '/noticias' });
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts();
        const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        posts.sort((a, b) => b.id - a.id);
        setPosts(posts);
    }

    return (
        <>
            <NextSeo
                title='Onigiri Hardcore | Portal de Notícias e Entretenimento'
                description='Um site nerd com conteúdos nerds'
                canonical={`https://onigirihardcore.com.br/`}
                openGraph={{
                    url: 'https://onigirihardcore.com.br/',
                    title: 'Onigiri Hardcore | Portal de Notícias e Entretenimento',
                    description: 'Um site nerd com conteúdos nerds',
                    images: [
                        {
                            url: 'https://i.imgur.com/VoOogmx.png',
                            width: 460,
                            height: 460,
                            alt: 'Onigiri Hardcore | Portal de Notícias e Entretenimento',
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
            <Header />
            <FullNewsDetails>
                <div className="fullnews">
                    <h1>ARQUIVOS DO ONIGIRI HARDCORE</h1>
                    {posts && posts.map((post, index) => {
                        return (

                            <a href={post.slug} key={index}>
                                <img src={post.imageUrl} alt={post?.name} />
                                {/* <img src={item.image} width="320" /> */}
                                <div className="title">
                                    <i className="uil uil-clock-nine">&nbsp;{post.moreDate} | {post.categories === 'Movies' ? 'Filmes & Séries' : null || post.categories === 'Games' ? 'Video Games' : null || post.categories === 'Technologies' ? 'Tecnologias' : null || post.categories === 'Animes' ? 'Animes & HQs' : null || post.categories === 'Development' ? '4Devs' : null}</i>
                                    <h2>{post.title}</h2>
                                </div>
                            </a>
                        )
                    })
                    }
                </div>
            </FullNewsDetails>
            <Footer />
        </>
    )
}

export default FullNews
