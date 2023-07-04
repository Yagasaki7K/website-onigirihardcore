import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LoginDetails from "../../src/components/LoginDetails";
import SignInModal from "../../src/components/Modals/SignInModal";
import authService from "../../services/auth.service";

export default function Login() {
    const router = useRouter();

    async function checkAuth() {
        return await authService.stateAuthentication();
    }

    useEffect(() => {
        checkAuth().then(() => {
            router.push('/dashboard/create')
        });
    }, []);

    return (
        <LoginDetails>
            <div className="container">
                <div>
                    <Link href="/">
                        <img src="/logotipo-white.png" alt="Logo" />
                    </Link>
                    <SignInModal />
                </div>
            </div>
        </LoginDetails>
    );
}
