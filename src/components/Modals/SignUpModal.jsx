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
                                    <label htmlFor="title">Nome: </label>
                                    <input type="text" name="title" id="title" placeholder="Título da Publicação" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="description">Sobrenome: </label>
                                    <textarea name="description" id="description" maxLength={126} required />
                                </div>

                                <div className="item">
                                    <label htmlFor="image">Imagem da Publicação*: </label>
                                    <input type="file" name="image" id="image" required />
                                </div>

                                <div className="item">
                                    <label htmlFor="citation">Citação de Twitter: </label>
                                    <textarea name="citation" id="citation" placeholder="Uma citação que foi encontrada no Twitter ou em outra fonte" />
                                </div>

                                <div className="item">
                                    <label htmlFor="linkcitation">Link da Citação: </label>
                                    <input name="linkcitation" id="linkcitation" placeholder="https://twitter.com/Yagasaki7K/example" />
                                </div>

                                <div className="item">
                                    <label htmlFor="ytid">ID do Youtube: </label>
                                    <input name="ytid" id="ytid" placeholder="RfiKg_Sfg-o" />
                                </div>

                                <button className='sendbtn'>Enviar</button>
                                <button className='clrbtn'>Limpar</button>
                                <button></button>
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