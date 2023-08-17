import styled from 'styled-components'
import { colors } from './variables'

const HeaderDetails = styled.div`

    .header {
        display: flex;
        padding: 1rem 15rem;
        justify-content: space-between;
        background: ${colors.blackAlt};

        @media (max-width: 1600px) {
            padding: 1rem 6rem;
        }

        @media (max-width: 1440px) {
            padding: 1rem 4rem;
        }

        @media (max-width: 1366px) {
            padding: 1rem 3rem;
        }

        @media (max-width: 1200px) {
            .advice {
                display: none;
            }
        }

        @media (max-width: 768px) {
            padding: 1rem 7rem;
        }

        .logotipo {
            width: 36rem;
            margin-top: -0.15rem;

            @media (max-width: 414px) {
                width: 20rem;
            }
        }

        @media (max-width: 500px) {
            justify-content: center;
       }
    }

    .navigation {
        background: ${colors.blue};
        display: flex;
        height: 3rem;
        width: 100%;

        @media (max-width: 600px) {
            height: 5rem;
            border-radius: 15px;
            background: transparent;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            list-style: none;
            padding: 0;
            margin: 0;
            color: ${colors.white};
            margin-left: 15rem;

            @media (max-width: 1366px) {
                margin-left: 3rem;
            }

            background: ${colors.blue};

            #item-menu {
                display: flex;
            }

            .burguer {
                display: none;
            }

            @media (max-width: 768px) {
                margin-left: 1rem;
                margin-top: 0.5rem;
                height: 2rem;

                a {
                    margin-right: 1rem;
                }

                .burguer {
                    display: none;
                }
            }

            @media (max-width: 600px) {
                margin-left: 0;
                margin-top: 1rem;
                flex-direction: column;
                align-items: center;
                text-align: center;

                width: 100%;
                border-radius: 15px;
                background: transparent;
            }

            li {
                display: flex;
                padding: 0.7rem 1rem;

                @media (max-width: 768px) {
                    margin-left: 0.625rem;
                    padding: 0.7rem 0;
                }

                @media (max-width: 600px) {
                    margin-left: 2rem;
                    padding: 0.7rem 0;
                }

                margin: 0;
                font-size: 1rem;
                font-weight: 400;
                cursor: pointer;
                transition: 0.3s;
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;

                Link {
                    color: ${colors.white};
                    text-decoration: none;
                }

                :hover {
                    border-bottom: 2px solid ${colors.white};
                }
            }
        }
    }
`

export default HeaderDetails
