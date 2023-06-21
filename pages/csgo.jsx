import React from 'react'
import HLTV from 'hltv-api'
import Link from 'next/link'
import Header from '../src/components/Header'
import "keen-slider/keen-slider.min.css"
import CSGODetails from '../src/components/CSGODetails'
import { NextSeo } from 'next-seo'

export async function getStaticProps() {
    const news = await HLTV.getNews()
    const data = news.map((post) => ({
        title: post.title,
        description: post.description,
        link: post.link
    }))

    return {
        props: {
            data
        }
    }
}

const csgo = ({ data }) => {
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
            <CSGODetails>
                <div className="news">
                    <h1>Últimas notícias (via HLTV)</h1>

                    <div className="content">
                        {
                            data && data.map((post, index) => (
                                <div className="news" key={index}>
                                    <Link href={post.link} noreferrer>
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                    </Link>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </CSGODetails>
        </>
    )
}

export default csgo
