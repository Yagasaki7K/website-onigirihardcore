import { useState } from 'react';
import Modal from 'react-modal';
import DashboardDetails from '../DashboardDetails';

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
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <DashboardDetails>
                <div className="content">
                    <div className="publi" id="publi">
                        <h1>Formulário de Cadastro</h1>

                        <div className="form-group">
                            <form onSubmit={(e) => e.preventDefault()}>

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

                                <button className='sendbtn'>Enviar</button>
                                <button onClick={handleCloseModal} className='clrbtn'>Fechar</button>
                            </form>
                        </div>
                    </div>
                </div>                  
                </DashboardDetails>
            </Modal>
        </div>
    )
}

export default SignUpModal