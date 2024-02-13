import styled from 'styled-components'
import { colors } from './variables'

const SlugDetails = styled.div`
    background: ${colors.blackdark};
    font-family: Inter, Poppins, sans-serif;
    font-size: 1.1rem;

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;

        @media (max-width: 768px) {
            object-fit: contain;
            height: 20rem;
            margin-bottom: 3%;
        }
    }

    blockquote {
        margin: 1rem;
        p {
            font-style: italic;
            color: #6281af;
            border-left: 2px solid #6281af;
            padding-left: 1rem;
        }
    }

    section {
        margin-left: 28rem;
        width: 71%;

        @media (max-width: 1920px) {
            width: 50%;
            margin: auto;
            margin-bottom: 5%;
        }

        @media (max-width: 1600px) {
            margin-left: 20rem;
            width: 50%;
        }

        @media (max-width: 1440px) {
            margin-left: 14rem;
            width: 60%;
        }

        @media (max-width: 1366px) {
            margin-left: 12rem;
            width: 70%;
        }

        @media (max-width: 768px) {
            margin-left: 5rem;
            width: 80%;
        }

        @media (max-width: 500px) {
            margin-left: 1rem;
            width: 90%;
        }

        margin-bottom: 5rem;
        padding-bottom: 1rem;

        h1 {
            margin-top: -1rem;
            color: ${colors.blue};
            font-size: 2rem;
            font-weight: 700;
            line-height: 35px;
            text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);
        }

        h2 {
            color: ${colors.blue};
        }

        a {
            color: ${colors.blue};
        }

        .anchor {
            fill: white;
            margin-right: 0.2rem;
        }

        p {
            text-align: center;
            flex-direction: column;
            font-weight: 600;
            font-style: italic;
            margin-bottom: 1.8rem;
        }

        ul {
            margin-top: -1rem;
        }

        li {
            margin-left: -1rem;
        }

        .date {
            margin-bottom: 0rem;
            margin-left: 48rem;
        }

        .block__content {
            width: 100%;
            min-width: 80%;
            max-width: 100%;
            text-align: justify;
            font-size: 1.1rem;
            line-height: 1.5rem;
        }

        .title__content {
            width: 60rem;

            @media (max-width: 1366px) {
                width: 100%;
            }

            @media (max-width: 768px) {
                font-size: 1.6em;
                line-height: 30px;
                width: 100%;
            }

            @media (max-width: 500px) {
                font-size: 1.6em;
                line-height: 30px;
                width: 90%;
            }
        }

        .image__content {
            img {
                display: flex;
                justify-content: center;
                margin: 0 auto;
                width: 80%;
                height: 100%;
            }
        }

        .citation {
            font-weight: 100;
            font-style: italic;
            color: ${colors.blue};

            a {
                p {
                    font-size: 1.5rem;
                    border-left: 2px solid ${colors.blue};
                    padding-left: 1rem;
                    width: 100%;
                }

                :hover {
                    text-decoration: underline;
                }
            }
        }

        iframe {
            width: 60rem;
            margin-left: 0rem;
            height: 38rem;
            border: none;

            @media (max-width: 500px) {
                width: 100%;
                height: 25rem;
            }

            @media (max-width: 768px) {
                width: 100%;
                height: 25rem;
            }
        }
    }
`

export default SlugDetails
