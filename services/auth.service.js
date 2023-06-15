import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { auth } from "../client"

class authService {

    signInGoogle = async () => {
        const provider = new GoogleAuthProvider()
        return await signInWithPopup(auth, provider).then(
            (result) => {
                const userInfo = {
                    Name: result.user.displayName,
                    Email: result.user.email,
                    Photo: result.user.photoURL,
                    UId: result.user.uid
                }
                sessionStorage.setItem("GoogleAccessAuth", JSON.stringify(userInfo))
                location.assign("/") 
            }
        )
    }

}

export default new authService();
