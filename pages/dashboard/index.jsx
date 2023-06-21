import { useEffect } from "react";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";

function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("GoogleAccessAuth");

        if (!isAuthenticated) {
            router.push("/login");
        } else {
            const jsonObject = JSON.parse(isAuthenticated);
            authService.queryByAdmin(jsonObject.UId).then((result) =>{
                console.log(result)
            })
            
        }
    }, []);

    return (
        <>
            <p>TESTE</p>
        </>
    );
}

export default Dashboard;
