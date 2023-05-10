import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';
import authService from '../../../services/auth.service'

const SignInModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    //const [loginEmail, setLoginEmail] = useState('')
    //const [loginPassword, setLoginPassword] = useState('')

    function handleOpenModal() {
        setModalOpen(true)
    }

    function handleCloseModal() {
        setModalOpen(false)
    }

    function collectData() {
        //const formEmail = document.getElementById('email').value
        //setLoginEmail(formEmail)

        //const formPasswd = document.getElementById('password').value
        //setLoginPassword(formPasswd)
        return null
    }

    async function sendData() {
        return authService.signInGoogle();
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Acessar</button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <ModalDetails>
                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Acessar conta do Onigiri</h1>

                        <div className="form-group">
                            <form onSubmit={collectData}>
                                <div className='item'>
                                    Acesse com o Google:
                                    <button onClick={sendData}>Google</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                  
                </ModalDetails>
            </Modal>
        </div>
    )
}

export default SignInModal