import { ref, deleteObject } from "firebase/storage";
import { storage } from "../client";

class imgService {
    deleteImage = async (nameFile) => {
        const filesImagesRef = ref(storage, `images/${nameFile}`);
        return await deleteObject(filesImagesRef);
    };
}
export default new imgService();


