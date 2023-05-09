import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import auth from "../client";

class userService {
    signUpWithEmail = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    signInWithEmail = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }
}
export default new userService();