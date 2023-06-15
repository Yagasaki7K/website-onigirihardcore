import { useEffect } from "react";
import Authentication from "../../src/components/Login/Authentication";
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter()
    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('GoogleAccess')

        if (isAuthenticated) {
            router.push('/')
        } 
    },[])

    return (
        <>
            <Authentication/>
        </>
    )
}