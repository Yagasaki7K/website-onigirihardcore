import React, { useEffect, useState } from 'react'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import FullNewsDetails from '../src/components/FullNewsDetails'
import postService from '../services/post.service'

// import post from '../server/index.json'

const FullNews = () => {
    const [Post, setPost] = useState([])
    const posts = Post.reverse()

    useEffect(() => {
        getPost()
    }, [])

    const getPost = async () => {
        const data = await postService.getAllPosts()
        setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const firebaseURL = 'https://firebasestorage.googleapis.com/v0/b/onigirihardcore-88090.appspot.com/o/files%2F'
    return (
        <>
            <Header />
            <FullNewsDetails>
                <div className="fullnews">
                    <h1>TODAS AS NOTÍCIAS DO ONIGIRI</h1>
                    {posts && posts.map((item, index) => {
                        return (
                            <a href={item.slug} key={index}>
                                <img src={item.image ? firebaseURL + item.image + `?alt=media` : null} alt={item?.name} width="320"></img>
                                {/* <img src={item.image} width="320" /> */}
                                <div className="title">
                                    <p>{item.createdAtExtended}</p>
                                    <h2>{item.title}</h2>
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
