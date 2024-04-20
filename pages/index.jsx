/* eslint-disable react/prop-types */
import { NextSeo } from 'next-seo'
import Image from 'next/image'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import TechnologiesDetails from '../src/components/TechnologiesDetails'
import ContentDetails from '../src/components/ContentDetails'
import CategoriesDetails from '../src/components/CategoriesDetails'
import LastNewsDetails from '../src/components/LastNewsDetails'

import 'keen-slider/keen-slider.min.css'
import Slide from '../src/components/Slide'
import postService from '../services/post.service'

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

export default function Home({ postData }) {

    let animeContent = postData.filter(posts => posts.categories === 'Animes')
    let firstAnime = animeContent.slice(0, 1)
    let lastAnime = animeContent.slice(1, 4)

    let gamesContent = postData.filter(posts => posts.categories === 'Games')
    let firstGames = gamesContent.slice(0, 1)
    let lastGames = gamesContent.slice(1, 4)

    let moviesContent = postData.filter(posts => posts.categories === 'Movies')
    let firstMovies = moviesContent.slice(0, 1)
    let lastMovies = moviesContent.slice(1, 4)

    let technologies = postData.filter(posts => posts.categories === 'Technologies')

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
                <CategoriesDetails>
                    <div className="firstCategories" id="animes">
                        <div className="header">
                            <p className="animes">&nbsp;&nbsp;Animes {`&`} HQs</p>
                        </div>

                        {
                            firstAnime && firstAnime.map(post => (
                                post.categories === 'Animes' ? (
                                    <a className='categories-content' href={post.slug} key={post.id}>
                                        <Image src={post.imageUrl} alt={post?.name} width={500} height={500} loading='lazy' />
                                        <h1>{post.title.length > 35 ? post.title.slice(0, 55) + "..." : post.title}</h1>
                                        {/* <h1>{post.smalltitle}</h1> */}

                                        <span>
                                            <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                            <p>{post.description}</p>
                                        </span>
                                    </a>
                                ) : (
                                    null
                                )
                            ))
                        }

                        <div className="posts">
                            {
                                lastAnime && lastAnime.map(post => (
                                    post.categories === 'Animes' ? (
                                        <div className="post" key={post.id}>
                                            <a href={post.slug}>
                                                <Image src={post.imageUrl} alt={post?.name} width={150} height={150} loading='lazy' />

                                                <div className="post-side">
                                                    <h3>{post.title}</h3>
                                                    <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                                </div>
                                            </a>
                                        </div>
                                    ) : (
                                        null
                                    )
                                ))
                            }
                        </div>
                    </div>

                    <div className="secondCategories">
                        <div className="header">
                            <p className="games">&nbsp;&nbsp;Video Games</p>
                        </div>

                        {
                            firstGames && firstGames.map(post => (
                                post.categories === 'Games' ? (
                                    <a className='categories-content' href={post.slug} key={post.id}>
                                        <Image src={post.imageUrl} alt={post?.name} width={500} height={500} loading='lazy' />
                                        <h1>{post.title.length > 35 ? post.title.slice(0, 55) + "..." : post.title}</h1>
                                        {/* <h1>{post.smalltitle}</h1> */}

                                        <span>
                                            <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                            <p>{post.description}</p>
                                        </span>
                                    </a>
                                ) : (
                                    null
                                )
                            ))
                        }

                        <div className="posts">
                            {
                                lastGames && lastGames.map(post => (
                                    post.categories === 'Games' ? (
                                        <div className="post" key={post.id}>
                                            <a href={post.slug} >
                                                <Image src={post.imageUrl} alt={post?.name} width={150} height={150} loading='lazy' />

                                                <div className="post-side">
                                                    <h3>{post.title}</h3>
                                                    <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                                </div>
                                            </a>
                                        </div>
                                    ) : (
                                        null
                                    )
                                ))
                            }
                        </div>
                    </div>

                    <div className="secondCategories">
                        <div className="header">
                            <p className="movies">&nbsp;&nbsp;Filmes {`&`} Séries</p>
                        </div>

                        {
                            firstMovies && firstMovies.map(post => (
                                post.categories === 'Movies' ? (
                                    <a className='categories-content' href={post.slug} key={post.id}>
                                        <Image src={post.imageUrl} alt={post?.name} width={500} height={500} loading='lazy' />
                                        <h1>{post.title.length > 35 ? post.title.slice(0, 55) + "..." : post.title}</h1>

                                        <span>
                                            <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                            <p>{post.description}</p>
                                        </span>
                                    </a>
                                ) : (
                                    null
                                )
                            ))
                        }

                        <div className="posts">
                            {
                                lastMovies && lastMovies.map(post => (
                                    post.categories === 'Movies' ? (
                                        <div className="post" key={post.id}>
                                            <a href={post.slug}>
                                                <Image src={post.imageUrl} alt={post?.name} width={150} height={150} loading='lazy' />

                                                <div className="post-side">
                                                    <h3>{post.title}</h3>
                                                    <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                                </div>
                                            </a>
                                        </div>
                                    ) : (
                                        null
                                    )
                                ))
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
                                        <Image src={post.imageUrl} alt={post?.name} width={150} height={150} loading='lazy' />

                                        <div className="title">
                                            <h1>{post.title}</h1>
                                            <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
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
                                            <Image src={post.imageUrl} alt={post?.name} width={150} height={150} loading='lazy' />
                                        </a>
                                    </div>
                                    <div className="rightContent">
                                        <a href={post.slug}>
                                            <h1>{post.title}</h1>

                                            <div className="categories">
                                                {post.categories === 'Movies' ? <span className="movies">Filmes & Séries</span> : null || post.categories === 'Games' ? <span className="games">Video Games</span> : null || post.categories === 'Technologies' ? <span className="tecnologies">Ciência & Tecnologia</span> : null || post.categories === 'Animes' ? <span className="animes">Animes & HQs</span> : null || post.categories === 'Development' ? <span className="development">4Devs</span> : null}
                                                <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                            </div>
                                            <p>{post.description}</p>
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
