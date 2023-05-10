import {
    GoogleAuthProvider,
    signInWithPopup 
} from "firebase/auth";
import auth from "../client";

const provider = new GoogleAuthProvider();

class authService {
    signInGoogle = async () => {
        return await signInWithPopup(auth, provider)
        .then((result) =>{
            const credencial = GoogleAuthProvider.credentialFromResult(result);
            const token = credencial.accessToken;
            const user = result.user;
            console.log(user)
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credencial = GoogleAuthProvider.credentialFromError(error);
        })
    }
}

export default new authService();