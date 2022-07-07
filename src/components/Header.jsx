import React from 'react'
import HeaderDetails from './HeaderDetails'

const Header = () => {
  return (
    <HeaderDetails>
        <div className="header">
            <a href="/">
                <img src="/src/assets/logotipo.png" className="logotipo" alt="logo"/>
            </a>
            <img src="/src/assets/anuncio.png" className="advice" alt="Anuncio"/>
        </div>

        <div className="navigation">
            <ul>
                <li>
                    <a href="/">Notícias</a>
                </li>
                <li>
                    <a href="/">Animes {`&`} HQs</a>
                </li>
                <li>
                    <a href="/">Jogos</a>
                </li>
                <li>
                    <a href="/">Tecnologia</a>
                </li>
                <li>
                    <a href="/">Análises</a>
                </li>
                <li>
                    <a href="/">Kalify Inc</a>
                </li>
            </ul>
        </div>
    </HeaderDetails>
  )
}

export default Header