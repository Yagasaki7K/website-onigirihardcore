import Page404Details from "../src/components/Page404Details";

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
            </div>
        </Page404Details>
    );
}
