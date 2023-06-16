import Page404Details from "../src/components/Page404Details";
import Link from "next/link";

export default function Custom404() {
    return (
        <Page404Details>
            <div className="error_description">
                <h1>404 Error</h1>
                <span>
                    Que pena! :(
                    <br />
                    Nenhuma página foi encontrada.
                </span>
                <Link href="/">
                    <button>Voltar para página inicial</button>
                </Link>
            </div>
        </Page404Details>
    );
}
