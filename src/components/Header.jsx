import React from 'react'
import HeaderDetails from './HeaderDetails'

function ShowHiddenMenu() {
    let item = document.getElementById("item-menu");
    let ul = document.getElementById("ul-menu");

    if (item.style.display === "none") {
        item.style.display = "block";
        item.style.flexDirection = "column";
        item.style.textAlign = "center";
        item.style.marginLeft = "2rem";
        item.style.zIndex = "1";
        ul.style.height = "21rem";
    } else {
        item.style.display = "none";
        ul.style.height = "3rem";
    }
}

const Header = () => {
  return (
    <HeaderDetails>
        <div className="header">
            <a href="/">
                <img src="/logotipo.png" className="logotipo" alt="logo"/>
            </a>
            <a href="/">
                <img src="/anuncio.png" className="advice" alt="Anuncio"/>
            </a>
        </div>

        <div className="navigation">
            <ul id="ul-menu">
                <li className="burguer">
                    <a onClick={ShowHiddenMenu}><i className="uil uil-bars"></i></a>
                </li>
                <span id="item-menu">
                    <li>
                        <a href="/">Notícias</a>
                    </li>
                    <li>
                        <a href="/">Animes {`&`} HQ's</a>
                    </li>
                    <li>
                        <a href="/">Jogos</a>
                    </li>
                    <li>
                        <a href="/">Tecnologia</a>
                    </li>
                    <li>
                        <a href="https://onigiri-hardcore.blogspot.com/" target="_blank">OH: Arquivos</a>
                    </li>
                    <li>
                        <a href="https://kalify.vercel.app" target="_blank">Kalify Inc</a>
                    </li>
                </span>
            </ul>
        </div>
    </HeaderDetails>
  )
}

export default Header