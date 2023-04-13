import FooterDetails from './FooterDetails';

export default function Footer() {
    return (
        <FooterDetails>

            <div className="imgfooter">
                <a href="/">
                    <img src="/logotipo-white.png" alt="footer" />
                </a>
            </div>

            <div className="footer">
                <p>
                    <a href="/login">©</a> 2013 - {new Date().getFullYear()} <a href="/">Onigiri Hardcore</a> - &nbsp;
                    <a href="https://kalifyinc.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a> | &nbsp;
                </p>
                <p>
                    Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários
                </p>
            </div>
        </FooterDetails>
    )
}
