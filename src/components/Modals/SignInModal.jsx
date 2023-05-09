import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';


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
            <button onClick={handleOpenModal}>Acessar</button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <ModalDetails>
                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Acessar conta do Onigiri</h1>

                        <div className="form-group">
                            <form onSubmit={(e) => e.preventDefault()}>

                                <div className="item">
                                    <label htmlFor="e-mail">E-mail: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="passwd">Senha: </label>
                                    <input type="text" name="title" id="title" required />
                                </div>

                                <button className='sendbtn'>Entrar</button>
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

export default SignUpModal