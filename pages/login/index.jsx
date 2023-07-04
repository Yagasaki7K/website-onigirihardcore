import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginDetails from "../../src/components/LoginDetails";
import SignUpModal from "../../src/components/Modals/SignUpModal";
import SignInModal from "../../src/components/Modals/SignInModal";
import authService from "../../services/auth.service";

export default function Login() {
    const router = useRouter();

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    useEffect(() => {
        checkAuth().then(() => {
            router.push("/");
        });
    }, []);

    return (
        <LoginDetails>
            <div className="container">
                <div>
                    <img src="/logotipo-white.png" alt="Logo" />
                    <SignUpModal />
                    <SignInModal />
                </div>
            </div>
        </LoginDetails>
    );
};
