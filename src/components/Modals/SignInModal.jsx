import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';
import authService from '../../../services/auth.service'

const SignInModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [value, setValue] = useState(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = sessionStorage.getItem('GoogleAccess');
            setValue(data);
        }
    }, [])

    //const [loginEmail, setLoginEmail] = useState('')
    //const [loginPassword, setLoginPassword] = useState('')

    function handleOpenModal() {setModalOpen(true)}

    function handleCloseModal() {setModalOpen(false)}

    function collectData() {
        const formEmail = document.getElementById("email").value
        console.log(formEmail)

        const formPasswd = document.getElementById("password").value
        console.log(formPasswd)
    }

    function sendData() {
        return null
    }

    function sendGoogleReq() {
        authService.signInGoogle()
    }
    return (
        <div>
            { value ? location.assign("/") :
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
                                            <label htmlFor="email">E-mail: </label>
                                            <input type="text" name="email" id="email"/>
                                        </div>

                                        <div className='item'>
                                            <label htmlFor="password">Senha: </label>
                                            <input type="text" name="password" id="password"/>
                                        </div>

                                        <button onClick={sendData} className='sendbtn'>Entrar</button>
                                        <button onClick={handleCloseModal} className='closebtn'>Fechar</button>
                                    </form>
                                    <div className='item'>
                                        Acesse com o Google:
                                        <button onClick={sendGoogleReq}>Google</button>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                        </ModalDetails>
                    </Modal>
                </div>
            }   
        </div>
    )
}

export default SignInModal