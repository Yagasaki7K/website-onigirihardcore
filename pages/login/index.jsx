import { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Login = ({ children }) => {
    const router = useRouter();
    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("GoogleAccessAuth");

        if (isAuthenticated) {
            router.push("/");
        }
    }, []);

    return <>{children}</>;
};

Login.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Login;
