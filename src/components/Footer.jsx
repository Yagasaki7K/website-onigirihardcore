import React from 'react';
import FooterDetails from './FooterDetails';

export default function Footer() {
    return (
        <FooterDetails>
            <div className="imgfooter">
                <a href="/">
                    <img src="/logotipo.png" alt="logo" />
                </a>
            </div>

            <div className="footer">
                <p>
                    <a href="/login">Copyright ©</a> 2013 - {new Date().getFullYear()} <a href="/">Onigiri Hardcore</a> by&nbsp;
                    <a href="https://kalify.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a> |&nbsp;Todas as imagens são marcas registradas dos seus respectivos proprietários
                </p>
            </div>
        </FooterDetails>
    )
}
