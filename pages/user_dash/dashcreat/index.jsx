import { useRouter } from "next/router";
import { useEffect } from "react";
import Authentication from "../../../src/components/Login/Authentication";

const UserDash = () => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("GoogleAccessAuth");

        if (!isAuthenticated) {
            router.push("/login");
        }
    }, []);

    return <>
        <>
            <Authentication />
        </>
    </>;
};

export default UserDash;
