import { useRouter } from "next/router";
import authService from "../../../services/auth.service";

const SignInModal = () => {
    const router = useRouter();

    //const [loginEmail, setLoginEmail] = useState('')
    //const [loginPassword, setLoginPassword] = useState('')

    function sendGoogleReq() {
        authService.signInGoogle(router);
    }

    return (
        <div className="btn-access">
            <button onClick={sendGoogleReq}>
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
                Acessar com Google
            </button>
        </div>
    )
}

export default SignInModal
