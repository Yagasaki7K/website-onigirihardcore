import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { auth } from "../client"

class authService {

    signInGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
}

export default new authService();
