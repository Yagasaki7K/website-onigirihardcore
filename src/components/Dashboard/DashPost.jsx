import "@uiw/react-markdown-preview/markdown.css"
import "@uiw/react-md-editor/markdown-editor.css"
import { useEffect, useState } from 'react'
import postService from '../../../services/post.service'
import DashboardDetails from "../DashboardDetails"
import SideMenu from '../Login/SideMenu'
import { EditPostModal } from "../Modals/EditPostModal"
import { DeletePostModal } from "../Modals/DeletePostModal"

const DashPost = () => {
    const [Posts, setPosts] = useState([])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getPosts()
    }, [])

    
    return (
        <DashboardDetails>
            <SideMenu/>
            <div className="content">
                <div className="publi" id="publi">
                    <h1>Modificar Publicações</h1>
                    <div className="container">
                        <table>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>Data de Modificação</th>
                                <th>Ações</th>
                            </tr>
                            {
                                Posts.map((post) => (
                                    <tr key={post}>
                                        <a href={'/' + post.slug} target='_blank' rel="noreferrer"><td>{post.title}</td></a>
                                        <td>{post.author}</td>
                                        <td>{post.categories}</td>
                                        <td>{post.lessDate}</td>
                                        <td><EditPostModal id={post.id} /></td>
                                        <td><DeletePostModal id={post.id} url={post.imageUrl}/></td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </DashboardDetails>
    )
}

export default DashPost
