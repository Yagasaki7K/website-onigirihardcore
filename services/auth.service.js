import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { auth } from "../client"

class authService {

    signInGoogle = async () => {
        const provider = new GoogleAuthProvider()
        return await signInWithPopup(auth, provider).then(
            (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const userInfo = {
                    token: credential.accessToken,
                    user: result.user
                }
                return console.log(userInfo)
            }
        )
    }

}

export default new authService();
