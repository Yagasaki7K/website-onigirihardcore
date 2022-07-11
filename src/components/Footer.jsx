import FooterDetails from './FooterDetails'
import Logotipo from '/src/assets/logotipo.png'

const Footer = () => {
  return (
    <FooterDetails>

        <div className="imgfooter">
            <a href="/">
                <img src={Logotipo} alt="footer" />
            </a>
        </div>
        
        <div className="footer">
            <p>
                © 2013 - {new Date().getFullYear()} <a href="/">Onigiri Hardcore</a> - &nbsp;
                <a href="https://kalifyinc.vercel.app/" target="_blank">Kalify Inc.</a> | &nbsp;
            </p>
            <p>
                Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários
            </p>
        </div>
    </FooterDetails>
  )
}

export default Footer