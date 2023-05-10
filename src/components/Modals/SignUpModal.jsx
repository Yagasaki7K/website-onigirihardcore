import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';
//import userServiceEmail from '../../../services/auth.service'

const SignUpModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    //const [registerName, setRegisterName] = useState('')
    //const [registerLastName, setRegisterLastName] = useState('')
    //const [registerEmail, setRegisterEmail] = useState('')
    //const [registerPassword, setRegisterPasswd] = useState('')
    //const [registerPasswdConfirm, setRegisterPasswdConfirm] = useState('')

    function handleOpenModal() {
        setModalOpen(true)
    }

    function handleCloseModal() {
        setModalOpen(false)
    }

    function collectData() {
        return null
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Cadastrar</button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <ModalDetails>
                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Formulário de Cadastro</h1>

                        <div className="form-group">
                            <form onSubmit={collectData}>
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

export default SignUpModal