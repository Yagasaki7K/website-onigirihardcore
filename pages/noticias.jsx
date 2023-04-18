import React, { useEffect, useState } from 'react'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import FullNewsDetails from '../src/components/FullNewsDetails'
import postService from '../services/post.service'

// import post from '../server/index.json'

const FullNews = () => {
    const [Post, setPost] = useState([])
    const posts = Post.sort((a, b) => b.moreDate - a.moreDate);

    useEffect(() => {
        getPost()
        console.log(posts)
    }, [])

    const getPost = async () => {
        const data = await postService.getAllPosts()
        setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse());
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
                                    <p>{post.createdAtExtended}</p>
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
