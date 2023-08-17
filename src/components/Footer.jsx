import React from 'react';
import FooterDetails from './FooterDetails';

export default function Footer() {
    return (
        <FooterDetails>
            <div className="imgfooter">
                <a href="/">
                    <img src="/logotipo.png" alt="footer" />
                </a>
            </div>

            <div className="footer">
                <p>
                    <a href="/login">©</a> 2015 - {new Date().getFullYear()} <a href="/">Onigiri Hardcore</a> by&nbsp;
                    <a href="https://kalifyinc.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a> |&nbsp;Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários
                </p>
            </div>
        </FooterDetails>
    )
}
