import TechnologiesDetails from './TechnologiesDetails'
// import post from '../../server/index.json'
import { useEffect, useState } from 'react'
import postService from '../../services/post.service'

const Technologies = () => {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    let technologies = Posts.filter(posts => posts.categories === 'Technologies')
    return (
        <TechnologiesDetails>
            <div className="tecnologies" id="news">
                <div className="header">
                    <p>Ciências & Tecnologia</p>
                </div>

                <div className="content">
                    {
                        technologies.slice(0, 4).map((post, index) => (
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
                        technologies.slice(4, 8).map((post, index) => (
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
                        technologies.slice(8, 12).map((post, index) => (
                            <a href={post.slug} key={index}>
                                <img src={post.imageUrl} alt={post?.name} />
                                {/* <img src={post.imageUrl} alt={post.title} title={post.title} /> */}

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
        </TechnologiesDetails>
    )
}

export default Technologies
