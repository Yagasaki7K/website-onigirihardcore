import { useEffect, useState } from "react";
import Modal from "react-modal";
import ModalDetails from "./ModalDetails";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import postService from "../../../services/post.service";

const MarkdownEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function EditPostModal(param) {
    const [documentPost, setDocumentPost] = useState([])
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        getPost()
    }, [])

    async function getPost() {
        let data = await postService.getPost(param.id)
        if (data.exists()) {
            return setDocumentPost(data.data())
        }
    }

    function handleOpenModal() {
        return setModalOpen(true);
    }

    function handleCloseModal() {
        return setModalOpen(false);
    }

    function updatePost() {
        return console.log("Deve ser atualizado");
    }

    return (
        <div>
            <button className="editar" onClick={handleOpenModal}>
                Editar
            </button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <ModalDetails>
                    <div className="content">
                        <div className="publi" id="publi">
                            <h1>Editar Publicação</h1>
                            <div className="form-group">
                                <form>
                                    <div className="item">
                                        <label htmlFor="author">Autor*: </label>
                                        <select id="author" defaultValue={documentPost.author}>
                                            <option value={"Anderson 'Yagasaki' Marlon"}> Anderson Marlon </option>
                                        </select>
                                    </div>

                                    <div className="item">
                                        <label htmlFor="title"> Titulo{" "}</label>
                                        <input type="text" name="text"id="title" defaultValue={documentPost.title} />
                                    </div>

                                    <div className="item">
                                        <label htmlFor="description">Descrição da Publicação*:{" "}</label>
                                        <textarea name="description" id="description" defaultValue={documentPost.description} maxLength={195} placeholder="Descrição da Publicação (Max.126)" required />
                                    </div>

                                    <div className="item">
                                        <label htmlFor="categories">Categoria da Publicação*:{" "}</label>
                                        <select id="categories" defaultValue={documentPost.categories}>
                                            <option>Animes</option>
                                            <option>Games</option>
                                            <option>Movies</option>
                                            <option>Technologies</option>
                                            <option>Development</option>
                                        </select>
                                    </div>

                                    <div className="item-markdown">
                                        <label htmlFor="body">Conteúdo da Publicação*:{" "}</label>
                                        <MarkdownEditor height={300} />
                                    </div>

                                    <div className="item">
                                        <label htmlFor="password"> Link Youtube:{" "}</label>
                                        <input type="text" name="text" id="ytid" defaultValue={documentPost.ytid} />
                                    </div>

                                    <div className="item">
                                        <label htmlFor="citation">Citação de Twitter:{" "}</label>
                                        <textarea name="citation" id="citation" defaultValue={documentPost.citation} placeholder="Uma citação que foi encontrada no Twitter ou em outra fonte" />
                                    </div>

                                    <div className="item">
                                        <label htmlFor="linkcitation">Link da Citação:{" "}</label>
                                        <input name="linkcitation" id="linkcitation" defaultValue={documentPost.linkCitation} placeholder="https://twitter.com/Yagasaki7K/example" />
                                    </div>
                                    <button onClick={handleCloseModal} className="closebtn">Fechar</button>
                                    <button onClick={updatePost}>Atualizar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </ModalDetails>
            </Modal>
        </div>
    );
}
