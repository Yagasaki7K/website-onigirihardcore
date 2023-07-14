import React, { useEffect, useState } from 'react'
import LastNewsDetails from './LastNewsDetails'
import postService from '../../services/post.service'


const LastNews = () => {

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
                    Posts && Posts.slice(0, 10).map((post, index) => (
                        <div className="content" key={index}>
                            <div className="leftContent">
                                <a href={post.slug}>
                                    <img src={post.imageUrl} alt={post?.name} />
                                </a>

                                <hr />
                            </div>
                            <div className="rightContent">
                                <a href={post.slug}>
                                    <h1>{post.title}</h1>
                                </a>

                                <div className="categories">
                                    <span>
                                        {post.categories === 'Movies' ? 'Filmes & Séries' : null || post.categories === 'Games' ? 'Video Games' : null || post.categories === 'Technologies' ? 'Ciência & Tecnologia' : null || post.categories === 'Animes' ? 'Animes & HQs' : null}
                                    </span>
                                    <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                </div>
                                <p>{post.description}</p>

                            </div>


                        </div>
                    ))
                }
            </div>
        </LastNewsDetails>
    )
}

export default LastNews