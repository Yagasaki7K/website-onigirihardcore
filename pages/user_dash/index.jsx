import { useRouter } from "next/router";
import { useEffect } from "react";
import PropTypes from "prop-types";

const UserDash = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const isAdmin = true;

        if (isAdmin) {
            router.push("/login");
        }
    }, []);

    return <>{children}</>;
};

UserDash.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserDash;
