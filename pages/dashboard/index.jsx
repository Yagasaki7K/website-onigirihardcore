import { useEffect } from "react";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";

function Dashboard() {
    const router = useRouter();

    const { pathname } = router;

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("GoogleAccessAuth");
        const jsonObject = JSON.parse(isAuthenticated);
        const uid = JSON.stringify(jsonObject.UId).replace(/"/g, "");

        if (!isAuthenticated) {
            router.push("/login");
        } else {
            authService.queryByUsersInAccessOne(uid).then((result) => {
                result !== true ? router.push("/") : null;
            });
        }
    }, [pathname]);

    return null;
}

export default Dashboard;
