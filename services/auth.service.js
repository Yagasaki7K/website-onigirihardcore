import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import auth from "../client";

class usersService {
    usersSignOutWithEmailPassword = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, )
    }

}
export default new usersService();