import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';
//import userService from '../../../services/auth.service'

const SignInModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    function handleOpenModal() {
        setModalOpen(true)
    }

    function handleCloseModal() {
        setModalOpen(false)
    }

    function collectData() {
        const formEmail = document.getElementById('email').value
        setLoginEmail(formEmail)

        const formPasswd = document.getElementById('passwd').value
        setLoginPassword(formPasswd)
    }

    function sendData() {
        //await (userService.signInWithEmail(email, passwd))
        console.log(loginEmail, loginPassword)
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
                            <form onChange={collectData}>

                                <div className="item">
                                    <label htmlFor="email">E-mail: </label>
                                    <input type="text" name="email" id="email" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="passwd">Senha: </label>
                                    <input type="text" name="passwd" id="passwd" required />
                                </div>

                                <button onClick={sendData} className='sendbtn'>Entrar</button>
                                <button onClick={handleCloseModal} className='closebtn'>Fechar</button>

                                <div className='item'>
                                    Acesse com o Google:
                                    <button>Google</button>
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