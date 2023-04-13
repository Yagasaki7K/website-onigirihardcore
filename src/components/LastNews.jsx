import LastNewsDetails from './LastNewsDetails'
// import post from '../../server/index.json'
import postService from '../../services/post.service'
import { useEffect, useState } from 'react'

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
            <div className="tecnologies" id="news">
                <div className="header">
                    <p>Últimas Notícias</p>
                </div>

                <div className="content">
                    {
                        Posts.slice(0, 4).map((post, index) => (
                            <a href={post.slug} key={index}>
                                <img src={post.imageUrl} alt={post?.name} />
                                {/* <img src={post.image} alt={post.title} title={post.title} /> */}

                                <div className="title">
                                    <h1>{post.title}</h1>
                                    {/* <h1>{post.smalltitle}</h1> */}
                                    <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                    {/* <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i> */}
                                </div>
                            </a>
                        ))
                    }
                </div>

                <div className="content">
                    {
                        Posts.slice(4, 8).map((post, index) => (
                            <a href={post.slug} key={index}>
                                <img src={post.imageUrl} alt={post?.name} />
                                {/* <img src={post.image} alt={post.title} title={post.title} /> */}

                                <div className="title">
                                    <h1>{post.title}</h1>
                                    {/* <h1>{post.smalltitle}</h1> */}
                                    <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                    {/* <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i> */}
                                </div>
                            </a>
                        ))
                    }
                </div>

                <div className="content">
                    {
                        Posts.slice(8, 12).map((post, index) => (
                            <a href={post.slug} key={index}>
                                <img src={post.imageUrl} alt={post?.name} />
                                <img src={post.imageUrl} alt={post.title} title={post.title} />

                                <div className="title">
                                    <h1>{post.title}</h1>
                                    {/* <h1>{post.smalltitle}</h1> */}
                                    <i className="uil uil-clock-nine">&nbsp;{post.lessDate}</i>
                                    {/* <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i> */}
                                </div>
                            </a>
                        ))
                    }
                </div>

            </div>
        </LastNewsDetails>
    )
}

export default LastNews
