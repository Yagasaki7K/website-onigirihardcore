import { useState } from "react";
import Modal from "react-modal";
import ModalDetails from "./ModalDetails";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MarkdownEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function EditPostModal(param) {
    const [fields, setFields] = useState({
        date: "",
        lessDate: "",
        moreDate: "",
        slug: "",
        author: "",
        title: "",
        description: "",
        categories: "",
        bodyPost: "",
        image: "",
        imageUrl: "",
        citation: "",
        linkCitation: "",
        ytid: "",
    });
    const [modalOpen, setModalOpen] = useState(false);

    async function handleOpenModal() {
        setModalOpen(true);
    }

    function handleCloseModal() {
        setModalOpen(false);
    }

    function updatePost() {
        console.log("Deve ser atualizado");
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
                                        <label htmlFor="password">
                                            Titulo{" "}
                                        </label>
                                        <input
                                            type="text"
                                            name="text"
                                            id="title"
                                            value="."
                                        />
                                    </div>

                                    <div className="item-markdown">
                                        <label htmlFor="body">
                                            Conteúdo da Publicação*:{" "}
                                        </label>
                                        <MarkdownEditor
                                            height={300}
                                            value={fields.bodyPost}
                                            onChange={setFields.bodyPost}
                                        />
                                    </div>

                                    <div className="item">
                                        <label htmlFor="password">
                                            Link Youtube:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            name="text"
                                            id="ytid"
                                            value="."
                                        />
                                    </div>

                                    <div className="item">
                                        <label htmlFor="password">
                                            Link Twitter:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            name="password"
                                            id="linkCitation"
                                            value="."
                                        />
                                    </div>
                                    <button
                                        onClick={handleCloseModal}
                                        className="closebtn"
                                    >
                                        Fechar
                                    </button>
                                    <button onClick={updatePost}>
                                        Atualizar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </ModalDetails>
            </Modal>
        </div>
    );
}
