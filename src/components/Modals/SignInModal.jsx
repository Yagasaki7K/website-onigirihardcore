import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import auth from "../../../client";

const SignInModal = () => {
    const provider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log(result)
        })
        .catch((error) =>{
            console.log(error)
        })
    }   

    return (
        <div>
            <button onClick={signInWithGoogle}>Acessar</button>
        </div>
    )
}

export default SignInModal