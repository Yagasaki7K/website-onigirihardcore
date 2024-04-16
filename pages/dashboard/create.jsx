import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import SideMenu from "../../src/components/Dashboard/SideMenu";

// import Confetti from "react-confetti";
import { toast } from 'sonner'

import DashboardDetails from "../../src/components/DashboardDetails";
import postService from "../../services/post.service";
import authService from "../../services/auth.service";
import { storage } from "../../client";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Head from "next/head";


const MarkdownEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

const DashboardCreate = () => {
    const router = useRouter();

    const [render, setRender] = useState(false);
    const [date, setDate] = useState("");
    const [lessDate, setLessDate] = useState("");
    const [moreDate, setMoreDate] = useState("");
    const [slug, setSlug] = useState("");

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [citation, setCitation] = useState("");
    const [linkCitation, setLinkCitation] = useState("");
    const [ytid, setYtid] = useState("");

    // const [showConfetti, setShowConfetti] = useState(false);

    const [bodyPost, setBodyPost] = useState("# Corpo da Publicação");

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    function SignOut() {
        return authService.signOutGoogle();
    }

    useEffect(() => {
        checkAuth()
            .then((result) => {
                authService.queryByUsersInAccessOne(result.id)
                    .then((result) => {
                        if (result === true) {
                            setRender(true)
                        } else {
                            SignOut();
                            router.push("/login")
                        }
                    });
            })
            .catch(() => {
                router.push("/login")
            });
    }, []);

    async function sendData() {
        const NewPosts = {
            date,
            lessDate,
            moreDate,
            slug,
            author,
            title,
            description,
            categories,
            bodyPost,
            image,
            imageUrl: url,
            citation,
            linkCitation,
            ytid,
        };

        if (!author || !title || !description || !url || !categories) {
            toast.error('🦄 Por favor, preencha todos os dados!');
        } else {
            await postService.addPost(NewPosts);
            location.href = "#publi";
            // setShowConfetti(true);
            toast.success('Publicação criada com sucesso! > https://onigirihardcore.com.br/' + slug);
        }
    }

    function TitleToSlug() {
        let title = document.getElementById("title").value;

        let slug = title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

        setSlug(slug);
    }

    function collectData() {
        const date = new Date();
        setDate(date);

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const monthNames = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ];

        const resultDate = `${day}/${month}/${year}`;
        const resultMoreDate = `${day} de ${monthNames[date.getMonth()]
            } de ${year}`;
        setLessDate(resultDate);
        setMoreDate(resultMoreDate);

        //

        const formAuthor = document.getElementById("author").value;
        setAuthor(formAuthor);

        const formTitle = document.getElementById("title").value;
        setTitle(formTitle);

        const formDescription = document.getElementById("description").value;
        setDescription(formDescription);

        const formCategories = document.getElementById("categories");
        const resultCategories =
            formCategories.options[formCategories.selectedIndex].text;
        setCategories(resultCategories);

        const formCitation = document.getElementById("citation").value;
        setCitation(formCitation);

        const formLinkCitation = document.getElementById("linkcitation").value;
        setLinkCitation(formLinkCitation);

        const formYtid = document.getElementById("ytid").value;
        setYtid(formYtid);

        TitleToSlug();
    }

    async function getImage(event) {
        const file = await event.target.files[0];

        setImage(file.name);

        const storageRef = ref(storage, `/images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(percent);
                toast.warning(percent + "%");
                toast.success('Image uploaded!')
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrl(url);
                });
            }
        );
    }

    if (render === true) {
        return (
            <DashboardDetails>
                <Head>
                    <title>Onigiri Hardcore | Dashboard</title>
                </Head>
                {/* {showConfetti && <Confetti gravity={0.5} height={1300} />} */}
                <SideMenu />
                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Criar Publicações</h1>

                        <div className="form-group">
                            <form onSubmit={(e) => e.preventDefault()} onChange={() => collectData()}>
                                <div className="item">
                                    <label htmlFor="author">Autor*: </label>
                                    <select id="author">
                                        <option value={"Anderson 'Yagasaki' Marlon"}> Anderson Marlon </option>
                                    </select>
                                </div>

                                <div className="item">
                                    <label htmlFor="title">Título da Publicação*: </label>
                                    <input type="text" name="title" id="title" placeholder="Título da Publicação" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="description">Descrição da Publicação*: </label>
                                    <textarea name="description" id="description" maxLength={195} placeholder="Descrição da Publicação (Max.126)" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="categories">Categoria da Publicação*: </label>
                                    <select id="categories">
                                        <option>Animes</option>
                                        <option>Games</option>
                                        <option>Movies</option>
                                        <option>Technologies</option>
                                        <option>Development</option>
                                    </select>
                                </div>

                                <div className="item">
                                    <label htmlFor="image">Imagem da Publicação*: </label>
                                    <input type="file" name="image" id="image" onChange={getImage} required />
                                </div>

                                <div className="item-markdown">
                                    <label htmlFor="body">Conteúdo da Publicação*: </label>
                                    <MarkdownEditor height={300} value={bodyPost} onChange={setBodyPost} className="markdown-editor" />
                                </div>

                                <div className="item">
                                    <label htmlFor="citation">Citação de Twitter: </label>
                                    <textarea name="citation" id="citation" placeholder="Uma citação que foi encontrada no Twitter ou em outra fonte" />
                                </div>

                                <div className="item">
                                    <label htmlFor="linkcitation">Link da Citação: </label>
                                    <input name="linkcitation" id="linkcitation" placeholder="https://twitter.com/Yagasaki7K/example" />
                                </div>

                                <div className="item">
                                    <label htmlFor="ytid">ID do Youtube: </label>
                                    <input name="ytid" id="ytid" placeholder="RfiKg_Sfg-o" />
                                </div>

                                <button onClick={sendData} className="sendbtn">Enviar</button>
                                <button className="clrbtn">Limpar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </DashboardDetails>
        );
    } else {
        return null;
    }
};

export default DashboardCreate;
