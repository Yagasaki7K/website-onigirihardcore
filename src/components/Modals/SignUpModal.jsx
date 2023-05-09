import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';
import userService from '../../../services/auth.service'

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

    async function requestSignUp() {
        await userService.usersSignUpWithEmailPassword(null, null)
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

                                <div className="item">
                                    <label htmlFor="name">Nome: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="lastname">Sobrenome: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="e-mail">E-mail: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="passwd">Senha: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="passwd again">Confirmar senha: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <button onClick={requestSignUp} className='sendbtn'>Enviar</button>
                                <button onClick={handleCloseModal} className='closebtn'>Fechar</button>
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