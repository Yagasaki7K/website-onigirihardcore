import styled from 'styled-components'
import { colors, device } from './variables'

const SlugDetails = styled.div`
    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;

        @media (${device.mobileL}) {
            object-fit: contain;
            height: 20rem;
            margin-top: -30rem;
        }

        @media (${device.tablet}) {
            object-fit: contain;
            height: 20rem;
            margin-top: -5rem;
            margin-bottom: -3rem;
        }
    }

    section {
        margin-left: 28rem;
        width: 71%;

        @media (${device.desktopS}) {
            margin-left: 20rem;
        }

        @media (${device.laptopL}) {
            margin-left: 14rem;
        }

        @media (${device.laptopM}) {
            margin-left: 12rem;
        }

        @media (${device.tablet}) {
            margin-left: 5rem;
            width: 80%;
        }

        @media (${device.mobileL}) {
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

            @media (${device.mobileL}) {
                font-size: 1.6em;
                line-height: 30px;
                width: 90%;
            }

            @media (${device.tablet}) {
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

            @media (${device.mobileL}) {
                width: 100%;
                height: 25rem;
            }

            @media (${device.tablet}) {
                width: 100%;
                height: 25rem;
            }
        }
    }
`

export default SlugDetails
