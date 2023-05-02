import React, { useEffect, useState } from 'react'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import FullNewsDetails from '../src/components/FullNewsDetails'
import postService from '../services/post.service'

// import post from '../server/index.json'

const FullNews = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts();
        const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        posts.sort((a, b) => b.id - a.id);
        setPosts(posts);
    }

    return (
        <>
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
                                    <i className="uil uil-clock-nine">&nbsp;{post.moreDate} | {post.categories === 'Movies' ? 'Filmes & Séries' : null || post.categories === 'Games' ? 'Video Games' : null || post.categories === 'Technologies' ? 'Tecnologias' : null || post.categories === 'Animes' ? 'Animes & HQs' : null}</i>
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
