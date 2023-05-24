import { useState } from 'react';
import Modal from 'react-modal';
import ModalDetails from './ModalDetails';
import postService from '../../../services/post.service';

export function EditPostModal(id) {
    const [modalOpen, setModalOpen] = useState(false);

    
    async function handleOpenModal() {
        setModalOpen(true)

        const data = await postService.getPost(id.param)
        const fields = data.data(document)

        const inputTitle = document.getElementById('title')
        inputTitle.value = fields.title

        const inputBodyPost = document.getElementById('bodyPost')
        inputBodyPost.value = fields.bodyPost

        const inputYtid = document.getElementById('ytid')
        inputYtid.value = fields.ytid

        const inputLinkCitation = document.getElementById('linkCitation')
        inputLinkCitation.value = fields.linkCitation

    }

    function handleCloseModal() {setModalOpen(false)}

    return (
        <div>
            <button className="editar" onClick={handleOpenModal}>Editar</button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal}>
                <ModalDetails>
                    <div className="content">
                        <div className="publi" id="publi">
                            <h1>Editar Publicação</h1>
                            <div className="form-group">
                                <form>                                
                                    <div className='item'>
                                        <label htmlFor="password">Titulo </label>
                                        <input type="text" name="text" id="title" value=""/>
                                    </div>

                                    <div className='item'>
                                        <label htmlFor="password">Corpo: </label>
                                        <input type="text" name="text" id="bodyPost" value=""/>
                                    </div>

                                    <div className='item'>
                                        <label htmlFor="password">Link Youtube: </label>
                                        <input type="text" name="text" id="ytid" value=""/>
                                    </div>

                                    <div className='item'>
                                        <label htmlFor="password">Link Twitter: </label>
                                        <input type="text" name="password" id="linkCitation" value=""/>
                                    </div>
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