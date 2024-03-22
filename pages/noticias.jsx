import React, { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import LastNewsDetails from '../src/components/LastNewsDetails'
import postService from '../services/post.service'
import Image from 'next/image'
import Head from 'next/head'
import ContentDetails from '../src/components/ContentDetails'

const Noticias = () => {
    const [Posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    function handleSearch(event) {
        const query = event.target.value;

        setSearch(query);
    }

    const filteredPets = search !== "" ? Posts.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase()) || post.categories.toLowerCase().includes(search.toLocaleLowerCase()) || post.bodyPost.toLowerCase().includes(search.toLocaleLowerCase())) : Posts;

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    return (
        <>
            <Head>
                <title>Notícias | Onigiri Hardcore</title>
            </Head>

            <Header />
            <ContentDetails>
                <LastNewsDetails>
                    <div className="container">

                        <input type="text" placeholder='O que vamos descobrir hoje?' onChange={handleSearch} />

                        <div className="header">
                            <p>Lista de Notícias</p>
                        </div>
                        {
                            filteredPets && filteredPets.map((post, index) => (
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

export default Noticias
