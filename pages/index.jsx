import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { Slide } from '../src/components/Slide'
import { Categories } from '../src/components/Categories'
import { Technologies } from '../src/components/Technologies'
import { LastNews } from '../src/components/LastNews'
import { NextSeo } from 'next-seo'
import { ContentDetails } from '../src/components/ContentDetails'

import { useEffect, useState } from 'react'
import { SkeletonSlide } from '../src/components/Skeleton/SkeletonSlide'

export default function Home() {

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
            <ContentDetails>
                <Categories />
                <Technologies />
                <LastNews />
            </ContentDetails>
            <Footer />
        </>
    )
}
