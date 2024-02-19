import React, { useEffect, useState } from 'react'
import LastNewsDetails from './LastNewsDetails'
import postService from '../../services/post.service'

export const LastNews = () => {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    return (
        <LastNewsDetails>
            <div className="container">
                <div className="header">
                    <p>Últimas Notícias</p>
                </div>
                {
                    Posts && Posts.slice(0, 15).map((post, index) => (
                        <div className="content" key={index}>
                            <div className="leftContent">
                                <a href={post.slug}>
                                    <img src={post.imageUrl} alt={post?.name} />
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
    )
}
