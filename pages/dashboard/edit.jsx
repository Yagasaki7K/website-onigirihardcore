import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import { useEffect, useState } from "react";
import postService from "../../services/post.service";
import authService from "../../services/auth.service";
import DashboardDetails from "../../src/components/DashboardDetails";
import SideMenu from "../../src/components/Login/SideMenu";
import EditPostModal from "../../src/components/Modals/EditPostModal";
import DeletePostModal from "../../src/components/Modals/DeletePostModal";
import { useRouter } from "next/router";

const DashboardEdit = () => {
    const router = useRouter();
    const [render, setRender] = useState();
    const [Posts, setPosts] = useState([]);

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    async function getPosts() {
        const data = await postService.getAllPosts();
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        checkAuth()
            .then((result) => {
                console.log(result);
                authService
                    .queryByUsersInAccessOne(result.id)
                    .then((result) => {
                        result !== true ? setRender(false) : setRender(true);
                        getPosts();
                    });
            })
            .catch(() => {
                router.push("/login");
            });
    }, []);

    if (render === true) {
        return (
            <DashboardDetails>
                <SideMenu />
                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Modificar Publicações</h1>
                        <div className="container">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Título</th>
                                        <th>Autor</th>
                                        <th>Categoria</th>
                                        <th>Data de Modificação</th>
                                        <th>Ações</th>
                                    </tr>
                                    {Posts.map((post) => (
                                        <tr key={post.id}>
                                            <td>
                                                <a
                                                    href={"/" + post.slug}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {post.title}
                                                </a>
                                            </td>
                                            <td>{post.author}</td>
                                            <td>{post.categories}</td>
                                            <td>{post.lessDate}</td>
                                            <td>
                                                <EditPostModal id={post.id} />
                                            </td>
                                            <td>
                                                <DeletePostModal
                                                    id={post.id}
                                                    url={post.imageUrl}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </DashboardDetails>
        );
    } else {
        return null;
    }
};

export default DashboardEdit;
