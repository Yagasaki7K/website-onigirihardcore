import { useEffect } from "react";
import { useRouter } from "next/router";
import Authentication from "../../src/components/Login/Authentication";
import authService from "../../services/auth.service";

const Login = () => {
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
        <>
            <Authentication />
        </>
    );
};

export default Login;
