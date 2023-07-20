import posts from '../server/index.json'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Slide from '../src/components/Slide'
import Categories from '../src/components/Categories'
import Technologies from '../src/components/Technologies'
import LastNews from '../src/components/LastNews'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const analyticsFirebase = dynamic(() => import('../client'),
    { ssr: false }
);

export default function Home() {
    useEffect(() => {
        const analytics = analyticsFirebase;
        analytics.logEvent('acesso_pagina', { page: '/' });
    }, [])
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
            <Slide />
            <Categories data={posts} />
            <Technologies />
            <LastNews />
            <Footer />
        </>
    )
}
