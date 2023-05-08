import { useState } from 'react';
import Modal from 'react-modal';

const SignInModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    function handleOpenModal() {
        setModalOpen(true)
    }

    function handleCloseModal() {
        setModalOpen(false)
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Acessar</button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                {/**/}
            </Modal>
        </div>
    )
}

export default SignInModal