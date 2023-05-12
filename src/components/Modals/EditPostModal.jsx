import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';

const EditPostModal = () => {
    const [modalOpen, setModalOpen] = useState(false)

    function handleOpenModal() {setModalOpen(true)}

    function handleCloseModal() {setModalOpen(false)}

    return (
        <div>
            <button className="editar" onClick={handleOpenModal}>Editar</button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <ModalDetails>
                    <div className="content">
                        <div className="publi" id="publi">
                            <h1>Editar Publicação</h1>
                            <div className="form-group">
                                <form>
                                    Em construção...
                                </form>
                            </div>
                        </div>
                    </div>  
                </ModalDetails>
            </Modal>
        </div>
    )
}

export default EditPostModal