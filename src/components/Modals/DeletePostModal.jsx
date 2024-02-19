import postService from '../../../services/post.service';
import imgService from '../../../services/img.service';

const DeletePostModal = (param) => {

    async function handleDelete() {
        if (confirm('Deseja deletar a publicação?') == true) {
            await Promise.all([postService.deletePost(param.id), imgService.deleteImage(param.url)])
        } else {
            null
        }
    }

    return (
        <div>
            <button className="deletar" onClick={handleDelete}>Deletar</button>
        </div>
    )
}

export default DeletePostModal;
