import styled from 'styled-components'
import { colors } from './variables'

const SlugDetails = styled.div`
    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;

        @media (max-width: 500px) {
            object-fit: contain;
            height: 20rem;
            margin-top: -30rem;
        }

        @media (max-width: 768px) {
            object-fit: contain;
            height: 20rem;
            margin-top: -5rem;
            margin-bottom: -3rem;
        }
    }

    section {
        margin-left: 28rem;
        width: 71%;

        @media (max-width: 1600px) {
            margin-left: 20rem;
        }

        @media (max-width: 1440px) {
            margin-left: 14rem;
        }

        @media (max-width: 1366px) {
            margin-left: 12rem;
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
        background: ${colors.whitelight};

        h1 {
            margin-top: -1rem;
            color: ${colors.blue};
            font-size: 2rem;
            font-weight: 700;
            line-height: 35px;
            text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);
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

            @media (max-width: 500px) {
                font-size: 1.6em;
                line-height: 30px;
                width: 90%;
            }

            @media (max-width: 768px) {
                font-size: 1.6em;
                line-height: 30px;
                width: 100%;
            }
        }

        .citation {
            font-weight: 100;
            font-style: italic;
            color: ${colors.blue};

            p {
                font-size: 1.5rem;
                border-left: 2px solid ${colors.blue};
                padding-left: 1rem;
                width: 100%;
            }
        }

        iframe {
            width: 60rem;
            margin-left: 0rem;
            height: 38rem;

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
