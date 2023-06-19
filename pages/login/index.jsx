import { useEffect } from "react";
import { useRouter } from "next/router";
import Authentication from "../../src/components/Login/Authentication";

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("GoogleAccessAuth");

        if (isAuthenticated) {
            router.push("/");
        }

    }, []);

    return (
        <>
            <Authentication />
        </>
    );
};

export default Login
