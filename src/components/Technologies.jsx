import TechnologiesDetails from './TechnologiesDetails'
// import post from '../../server/index.json'
import { useEffect, useState } from 'react'
import postService from '../../services/post.service'

export const Technologies = () => {
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
                        technologies.slice(0, 12).map((post, index) => (
                            <a href={post.slug} key={index}>
                                <img src={post.imageUrl} alt={post?.name} />

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
    )
}
