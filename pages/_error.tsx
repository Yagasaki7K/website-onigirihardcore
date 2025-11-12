import Page404Details from "../src/components/Page404Details";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function Custom404() {
    return (
        <>
            <Header />
            <Page404Details>
                <div className="error_description">
                    <h1>404</h1>
                    <span>
                        Que pena! :(
                        <br />
                        Nenhuma página foi encontrada.
                    </span>
                </div>
            </Page404Details>
            <Footer />
        </>
    );
}
