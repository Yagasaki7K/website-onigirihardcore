import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import auth from "../client";

class userService {
    usersSignOutWithEmailPassword = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    usersSignInWithEmailAndPassword = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }
}
export default new userService();