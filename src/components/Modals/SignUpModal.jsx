import { useState } from 'react';
import Modal from 'react-modal';
import LoginDetails from '../LoginDetails';

const SignUpModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    function handleOpenModal() {
        setModalOpen(true)
    }

    function handleCloseModal() {
        setModalOpen(false)
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Cadastrar</button>
            <Modal></Modal>
        </div>
    )
}

export default SignUpModal