import { useState, useEffect } from "react";
import Page404Details from "../src/components/Page404Details";
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();
    const [count, setCount] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 1) {
                    router.push("/");
                    clearInterval(interval);
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Page404Details>
            <div className="error_description">
                <h1>404 Error</h1>
                <span>
                    Que pena! :(
                    <br />
                    Nenhuma página foi encontrada.
                </span>
                <p>
                    Redirecionando para a página inicial em {count} segundos...
                </p>
            </div>
        </Page404Details>
    );
}
