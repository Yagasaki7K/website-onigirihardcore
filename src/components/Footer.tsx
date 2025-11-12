import Link from "next/link";
import styled from "styled-components";

const FooterDetails = styled.div`
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 2rem 10vw;
        background: var(--background);
        border-top: 1px solid #374151;
        color: var(--white);
        font-size: 0.875rem;
        flex-wrap: wrap;
        gap: 2rem;

        .content {
            flex: 1 1 180px;
            margin: 0 1vw;
            min-width: 180px;
            max-width: 300px;

            .image {
                margin-top: 3rem;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 100%;
                    max-width: 320px; /* ajustável conforme o layout */
                    height: auto;
                    object-fit: contain; /* mantém proporção horizontal */
                    display: block;
                    filter: brightness(0.95);
                }

                @media (max-width: 1024px) {
                    max-width: 260px;
                    margin-top: 2.5rem;
                }

                @media (max-width: 768px) {
                    margin-top: 2rem;
                    max-width: 220px;
                }

                @media (max-width: 480px) {
                    margin-top: 1.5rem;
                    max-width: 180px;
                }
            }

            p {
                margin-bottom: 0.625rem;
                font-size: 0.9rem;
                line-height: 1.6;

                @media (max-width: 1024px) {
                    font-size: 0.875rem;
                }

                @media (max-width: 768px) {
                    font-size: 0.85rem;
                }

                @media (max-width: 480px) {
                    font-size: 0.8rem;
                }
            }

            h1 {
                color: var(--blue);
            }

            li {
                list-style: none;
                margin: 0.8rem 0;

                @media (max-width: 768px) {
                    margin: 0.6rem 0;
                }

                @media (max-width: 480px) {
                    margin: 0.5rem 0;
                }
            }

            a {
                text-decoration: none;
                color: var(--white);
                font-size: 0.9rem;
                transition: color 0.3s ease;

                &:hover {
                    color: var(--blue);
                }

                @media (max-width: 1024px) {
                    font-size: 0.875rem;
                }

                @media (max-width: 768px) {
                    font-size: 0.85rem;
                }

                @media (max-width: 480px) {
                    font-size: 0.8rem;
                }
            }

            @media (max-width: 1280px) {
                flex: 1 1 160px;
            }

            @media (max-width: 1024px) {
                flex: 1 1 150px;
            }

            @media (max-width: 820px) {
                flex: 1 1 120px;
            }

            @media (max-width: 768px) {
                flex: 1 1 100%;
                margin-bottom: 1rem;
            }

            @media (max-width: 480px) {
                margin: 0;
            }
        }

        @media (max-width: 1280px) {
            padding: 2rem 8vw;
            gap: 1.75rem;
        }

        @media (max-width: 1024px) {
            padding: 2rem 6vw;
            gap: 1.5rem;
        }

        @media (max-width: 900px) {
            padding: 2rem 4vw;
            gap: 1.5rem;
        }

        @media (max-width: 820px) {
            padding: 2rem 3.5vw;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            padding: 2rem 5vw;
            gap: 1rem;
        }

        @media (max-width: 640px) {
            align-items: stretch;
            padding: 1.75rem 4vw;
        }

        @media (max-width: 480px) {
            flex-direction: column;
            align-items: stretch;
            padding: 1.5rem 4vw;
            gap: 0.75rem;
        }

        @media (max-width: 375px) {
            padding: 1rem 3vw;
        }
    }

    .copyright {
        text-align: center;
        padding: 1rem;
        background: var(--background);
        color: var(--white);
        font-size: 0.9rem;
        border-top: 1px solid #374151;

        a {
            color: var(--blue);
            text-decoration: none;

            @media (max-width: 768px) {
                font-size: 0.85rem;
            }

            @media (max-width: 480px) {
                font-size: 0.8rem;
            }
        }

        @media (max-width: 1024px) {
            font-size: 0.85rem;
        }

        @media (max-width: 768px) {
            font-size: 0.8rem;
            padding: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
            padding: 0.7rem;
        }

        @media (max-width: 375px) {
            font-size: 0.75rem;
            padding: 0.6rem;
        }
    }
`;

const Footer = () => {
    return (
        <FooterDetails>
            <div className="footer">
                <div className="content">
                    <div className="image">
                        <Link href="/">
                            <img src="/logotipo.png" />
                        </Link>
                    </div>
                </div>

                <div className="content">
                    <h1>Nossa Organização</h1>
                    <Link href="https://kalify.vercel.app" target="_blank">
                        <li>Kalify Inc</li>
                    </Link>
                    <Link href="https://yagasaki.vercel.app" target="_blank">
                        <li>Anderson Marlon</li>
                    </Link>
                </div>

                <div className="content">
                    <h1>Mapa do Site</h1>
                    <Link href="/">
                        <li>Inicio</li>
                    </Link>

                    <Link href="/noticias">
                        <li>Notícias</li>
                    </Link>
                    <Link href="https://github.com/Yagasaki7K/website-onigirihardcore/raw/main/onigirihardcore.apk" target="_blank" rel="noreferrer">
                        <li>Download</li>
                    </Link>
                </div>

                <div className="content">
                    <h1>Contatos</h1>
                    <li>Telefone: (19) 99801-8174</li>
                    <li>Atendimento: Seg a Sex - 08h às 18h</li>
                    <li>Av. Dr. Heitor Penteado, s/n° - Portão 7 - Parque Taquaral</li>
                </div>
            </div>
            <div className="copyright">
                <p>
                    © 2015 - {new Date().getFullYear()} Onigiri Hardcore - Todos os direitos reservados. Desenvolvido pela{" "}
                    <Link href="https://kalify.vercel.app" target="_blank">
                        Kalify Inc
                    </Link>
                    .
                </p>
            </div>
        </FooterDetails>
    );
};

export default Footer;
