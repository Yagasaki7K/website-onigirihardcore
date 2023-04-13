import styled from 'styled-components'
import { colors, device } from './variables'

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
        margin-top: 15rem;
        margin-left: 47rem;

        @media (${device.laptopM}) {
            margin-top: 9rem;
            margin-left: 30rem;
        }

        color: ${colors.white};

        img {
            width: 22rem;
            margin-bottom: 3rem;
        }

        form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 23rem;
            width: 25rem;
            padding: 3rem;
            border-radius: 15px;
            background: ${colors.blackdark}};
            color: ${colors.black};

            input {
                margin-bottom: 1rem;
                padding: 0.5rem;
                font-family: 'Poppins', sans-serif;
                font-size: 1rem;
                border-radius: 5px;
                border: none;
                background: ${colors.graylight};

                :focus {
                    outline: none;
                }
            }

            button {
                color: ${colors.white};
                background: ${colors.blue};
                border-radius: 5px;
                border: none;
                margin-top: 1rem;
                margin-bottom: -1rem;
                padding: 0.5rem 1.5rem;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                text-transform: uppercase;
                cursor: pointer;

                :hover {
                    opacity: 0.8;
                    transition: 1s;
                }
            }
        }
`

export default LoginDetails
