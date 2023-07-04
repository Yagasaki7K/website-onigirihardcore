import styled from 'styled-components'
import { colors } from './variables'

const LoginDetails = styled.div`
    background: url(https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=914&q=80);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    overflow-y: hidden;

    .container {
        height: 100vh;
        width: 100vw;
        margin-top: 20rem;
        margin-left: 47rem;

        @media (max-width: 1366px) {
            margin-top: 13rem;
            margin-left: 30rem;
        }

        color: ${colors.white};

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 25rem;
            padding: 2rem;
            border-radius: 15px;
            background: ${colors.blackdark};
            color: ${colors.black};

            img {
                width: 22rem;
            }

            button {
                color: ${colors.white};
                background: ${colors.blue};
                border-radius: 5px;
                border: none;
                padding: 0.7rem;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                text-transform: uppercase;
                cursor: pointer;

                img {
                    width: 1rem;
                    margin-right: 0.5rem;
                }

                :hover {
                    opacity: 0.8;
                    transition: 1s;
                }
            }

            .btn-access {
                display: flex;
                margin-bottom: -1rem;
            }
        }
    }

`

export default LoginDetails
