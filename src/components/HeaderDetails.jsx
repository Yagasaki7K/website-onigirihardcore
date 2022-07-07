import styled from 'styled-components'
import colors from './Colors'

const HeaderDetails = styled.div `

    .header {
        display: flex;
        padding: 1rem 20rem;
        justify-content: space-around;

        @media (max-width: 1366px) {
            padding: 1rem 2rem;
        }

        @media (max-width: 1024px) {
            .advice {
                display: none;
            }
        }

        .logotipo {
            width: 25rem;
            margin-top: 1.2rem;

            @media (max-width: 414px) {
                width: 20rem;
            }
        }
    }
    
    .navigation {
        background: ${colors.blue};
        height: 3rem;
        width: 100%;

        @media (max-width: 600px) {
            height: 21rem;
            border-radius: 15px;
        }

        ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            color: #fff;
            margin-left: 23rem;

            .burger {
                display: none;
            }

            @media (max-width: 1366px) {
                margin-left: 5rem;
            }

            @media (max-width: 768px) {
                margin-left: 0;
            }

            @media (max-width: 600px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .burger {
                    display: initial;
                }
            }

            li {
                padding: 0.7rem 1rem;

                @media (max-width: 768px) {
                    margin-left: 0.625rem;
                    padding: 0.7rem 0;
                }
                
                margin: 0;
                font-size: 1rem;
                font-weight: 400;
                cursor: pointer;
                transition: 0.3s;
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;

                a {
                    color: #fff;
                    text-decoration: none;
                    padding-right: 2.5rem;
                }

                :hover {
                    transition: 1s;
                    background: ${colors.bluedark};

                    @media (max-width: 600px) {
                        background: ${colors.blue}
                    }
                }
            }
        }
    }
`

export default HeaderDetails