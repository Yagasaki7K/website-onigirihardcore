import { useEffect } from "react";
import { useRouter } from "next/router";
import Authentication from "../../src/components/Login/Authentication";

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("GoogleAccessAuth");

        if (isAuthenticated) {
            router.push("/dashboard/create");
        }
    }, []);

    return (
        <>
            <Authentication />
        </>
    );
};

export default Login;
