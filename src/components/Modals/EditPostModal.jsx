import { useState } from "react";
import Modal from "react-modal";
import ModalDetails from "./ModalDetails";
import postService from "../../../services/post.service";

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

        const data = await postService.getPost(param.id);
        //console.log(data.docs.map((doc) => ({...doc.data()})))
        setModalOpen(true);
        console.log(data.data().map())
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

                                    <div className="item">
                                        <label htmlFor="password">
                                            Corpo:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            name="text"
                                            id="bodyPost"
                                            value="."
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
