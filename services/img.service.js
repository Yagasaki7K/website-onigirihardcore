import { deleteObject, ref} from "firebase/storage";
import { storage } from "../client";

class imgService {
    deleteImage = async (urlFile) => {
        const url = await urlFile
            .replaceAll('%2F', '/')
                .replaceAll('%20', ' ')
                    .split('/');
        return deleteObject (ref(storage, `${url[7]}/${url[8]}`));
    };
}

export default new imgService();