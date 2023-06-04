import { deleteObject, ref} from "firebase/storage";
import { storage } from "../client";
import postService from "./post.service";

class imgService {
    deleteImage = async (id) => {
        const data = await postService.getPost(id);
        const fields = data.data(document);
        const url = new URL(fields.imageUrl).pathname.replaceAll('%2F', '/').split('/');
        const filesImagesRef = ref(storage, `${url[5]}/${url[6]}`);
        return await deleteObject(filesImagesRef);
    };
}

export default new imgService();