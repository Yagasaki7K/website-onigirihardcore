import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from 'firebase/storage'
import { storage } from '../client'

const filesImagesRef = ref(storage, '')

class imgService {
    deleteImage = async (urlImage) => {
        return await deleteObject(filesImagesRef, urlImage)
    }
}

export default new imgService();