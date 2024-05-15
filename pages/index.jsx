/* eslint-disable react/prop-types */
import { NextSeo } from 'next-seo'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import calculateReadingTime from '../src/utils/calculateReadingTime';
import formatDate from '../src/utils/formatDate'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import TechnologiesDetails from '../src/components/TechnologiesDetails'
import ContentDetails from '../src/components/ContentDetails'
import CategoriesDetails from '../src/components/CategoriesDetails'
import LastNewsDetails from '../src/components/LastNewsDetails'

import 'keen-slider/keen-slider.min.css'
import Slide from '../src/components/Slide'

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        let slug = '';
        slug = filename.replace('.mdx', '');

        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter, content: markdownContent } = matter(markdownWithMeta)
        const readingTime = calculateReadingTime(markdownContent);

        return {
            slug,
            frontmatter,
            readingTime,
        }
    })

    return {
        props: {
            postData: posts.sort((a, b) => {
                if (a.frontmatter.date && b.frontmatter.date) {
                    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
                } else {
                    console.error('Erro: Uma das datas está ausente nos posts.');
                    return 0;
                }
            }),
        },
    }
}

export default function Home({ postData }) {
    let animeContent = postData.filter(posts => posts.frontmatter.categories === 'Animes')
    let firstAnime = animeContent.slice(0, 1)
    let lastAnime = animeContent.slice(1, 4)

    let gamesContent = postData.filter(posts => posts.frontmatter.categories === 'Games')
    let firstGames = gamesContent.slice(0, 1)
    let lastGames = gamesContent.slice(1, 4)

    let moviesContent = postData.filter(posts => posts.frontmatter.categories === 'Movies')
    let firstMovies = moviesContent.slice(0, 1)
    let lastMovies = moviesContent.slice(1, 4)

    let technologies = postData.filter(posts => posts.frontmatter.categories === 'Technologies')

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

            <Slide posts={postData} />

            <ContentDetails>
                <CategoriesDetails>
                    <div className="firstCategories" id="animes">
                        <div className="header">
                            <p className="animes">&nbsp;&nbsp;Animes {`&`} HQs</p>
                        </div>

                        {
                            firstAnime && firstAnime.map(post => (
                                <a className='categories-content' href={post.slug} key={post.id}>
                                    <img src={post.frontmatter.image} alt={post.frontmatter.title} width={500} height={500} loading='lazy' />
                                    <h1>{post.frontmatter.title.length > 35 ? post.frontmatter.title.slice(0, 55) + "..." : post.frontmatter.title}</h1>

                                    <span>
                                        <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                        <p>{post.frontmatter.description}</p>
                                    </span>
                                </a>
                            )
                            )
                        }

                        <div className="posts">
                            {
                                lastAnime && lastAnime.map(post => (
                                    <div className="post" key={post.id}>
                                        <a href={post.slug}>
                                            <img src={post.frontmatter.image} alt={post.frontmatter.title} width={150} height={150} loading='lazy' />

                                            <div className="post-side">
                                                <h3>{post.frontmatter.title}</h3>
                                                <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                            </div>
                                        </a>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>

                    <div className="secondCategories">
                        <div className="header">
                            <p className="games">&nbsp;&nbsp;Video Games</p>
                        </div>

                        {
                            firstGames && firstGames.map(post => (
                                <a className='categories-content' href={post.slug} key={post.id}>
                                    <img src={post.frontmatter.image} alt={post.frontmatter.title} width={500} height={500} loading='lazy' />
                                    <h1>{post.frontmatter.title.length > 35 ? post.frontmatter.title.slice(0, 55) + "..." : post.frontmatter.title}</h1>

                                    <span>
                                        <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                        <p>{post.frontmatter.description}</p>
                                    </span>
                                </a>
                            ))
                        }

                        <div className="posts">
                            {
                                lastGames && lastGames.map(post => (
                                    <div className="post" key={post.id}>
                                        <a href={post.slug} >
                                            <img src={post.frontmatter.image} alt={post.frontmatter.title} width={150} height={150} loading='lazy' />

                                            <div className="post-side">
                                                <h3>{post.frontmatter.title}</h3>
                                                <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                            </div>
                                        </a>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>

                    <div className="secondCategories">
                        <div className="header">
                            <p className="movies">&nbsp;&nbsp;Filmes {`&`} Séries</p>
                        </div>

                        {
                            firstMovies && firstMovies.map(post => (
                                <a className='categories-content' href={post.slug} key={post.id}>
                                    <img src={post.frontmatter.image} alt={post.frontmatter.title} width={500} height={500} loading='lazy' />
                                    <h1>{post.frontmatter.title.length > 35 ? post.frontmatter.title.slice(0, 55) + "..." : post.frontmatter.title}</h1>

                                    <span>
                                        <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                        <p>{post.frontmatter.description}</p>
                                    </span>
                                </a>
                            )
                            )
                        }

                        <div className="posts">
                            {
                                lastMovies && lastMovies.map(post => (
                                    <div className="post" key={post.id}>
                                        <a href={post.slug}>
                                            <img src={post.frontmatter.image} alt={post.frontmatter.title} width={150} height={150} loading='lazy' />

                                            <div className="post-side">
                                                <h3>{post.frontmatter.title}</h3>
                                                <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                            </div>
                                        </a>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                </CategoriesDetails>

                <TechnologiesDetails>
                    <div className="tecnologies" id="news">
                        <div className="header">
                            <p>Ciências & Tecnologia</p>
                        </div>

                        <div className="content">
                            {
                                technologies.slice(0, 12).map((post, index) => (
                                    <a href={post.slug} key={index}>
                                        <img src={post.frontmatter.image} alt={post.frontmatter.title} width={150} height={150} loading='lazy' />

                                        <div className="title">
                                            <h1>{post.frontmatter.title}</h1>
                                            <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </TechnologiesDetails>

                <LastNewsDetails>
                    <div className="container">
                        <div className="header">
                            <p>Últimas Notícias</p>
                        </div>
                        {
                            postData && postData.slice(0, 15).map((post, index) => (
                                <div className="content" key={index}>
                                    <div className="leftContent">
                                        <a href={post.slug}>
                                            <img src={post.frontmatter.image} alt={post.frontmatter.title} width={150} height={150} loading='lazy' />
                                        </a>
                                    </div>
                                    <div className="rightContent">
                                        <a href={post.slug}>
                                            <h1>{post.frontmatter.title}</h1>

                                            <div className="categories">
                                                {post.frontmatter.categories === 'Movies' ? <span className="movies">Filmes & Séries</span> : null || post.frontmatter.categories === 'Games' ? <span className="games">Video Games</span> : null || post.frontmatter.categories === 'Technologies' ? <span className="tecnologies">Ciência & Tecnologia</span> : null || post.frontmatter.categories === 'Animes' ? <span className="animes">Animes & HQs</span> : null || post.frontmatter.categories === 'Development' ? <span className="development">4Devs</span> : null}
                                                <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                            </div>
                                            <p>{post.frontmatter.description}</p>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </LastNewsDetails>
            </ContentDetails>
            <Footer />
        </>
    )
}
