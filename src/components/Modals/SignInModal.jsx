import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';
import userService from '../../../services/auth.service'

const SignInModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')

    function handleOpenModal() {
        setModalOpen(true)
    }

    function handleCloseModal() {
        setModalOpen(false)
    }

    function collectData() {
        //...
    }

    async function requestSignIn() {
        await userService.usersSignInWithEmailAndPassword()
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

                                <div className="item">
                                    <label htmlFor="e-mail">E-mail: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="passwd">Senha: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <button onClick={requestSignIn} className='sendbtn'>Entrar</button>
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