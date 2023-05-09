import styled from 'styled-components';
import { colors } from './variables';

const ModalDetails = styled.div`
    display: flex;
    background: ${colors.blackdark};

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 20px;
        margin-bottom: 1rem;
        background: ${colors.blackdark};
        font-family: 'Poppins', sans-serif;

        h1 {
            color: ${colors.white};
        }

        .publi {
            display: flex;
            flex-direction: column;

            .item {
                display: flex;
                flex-direction: column;
                width: 50%;
                margin-top: 1rem;

                input, textarea, select, option {
                    background: ${colors.blackdark};
                    border: 1px solid ${colors.white};
                    color: ${colors.white};
                    padding: 0.5rem;
                    border-radius: 5px;
                    margin-top: 10px;
                    font-family: 'Poppins', sans-serif;
                }
            }

            .item-markdown {
                display: flex;
                flex-direction: column;
                width: 50%;
                margin-top: 1rem;

                label {
                    margin-bottom: 1rem;
                }

                button {
                    margin-top: 0;
                    padding: 1px;
                    border: none;
                    background: transparent;
                }
            }

            button {
                margin-top: 1rem;
                padding: 0.5rem;
                border: 1px solid ${colors.white};
                border-radius: 5px;
                background: ${colors.blackdark};
                color: ${colors.white};
                cursor: pointer;
                margin-right: 1rem;
                font-size: 0.8rem;

                &:hover {
                    background: ${colors.white};
                    color: ${colors.blackdark};
                    transition: 1s;
                }
            }

            .sendbtn {
                background: ${colors.green};
                border: none;
                padding: 0.8rem;
            }

            .closebtn {
                background: ${colors.yellow};
                border: none;
                padding: 0.8rem;
            }
        }

        .stats {
            display: none;
        }

        .container {
            display: flex;
            flex-direction: column;
            width: 100%;

            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 1rem;

                tr {

                    th, td {
                        color: ${colors.white};
                        padding: 0.5rem;
                        text-align: center;

                        button {
                            margin-right: 1rem;
                            margin-left: -4.5rem;
                        }

                        .editar {
                            background: ${colors.yellow};
                            color: ${colors.white};
                            border: none;
                            padding: 10px;
                            margin-right: -1rem;
                        }

                        .deletar {
                            background: ${colors.red};
                            color: ${colors.white};
                            border: none;
                            padding: 10px;
                            margin-left: -5rem;

                            @media (max-width: 1366px) {
                                margin-left: -3rem;
                            }
                        }

                        &:nth-child(1) {
                            width: 20%;

                            @media (max-width: 768px) {
                                width: 100%;

                                &:nth-child(1) {
                                    width: 100%;
                                }
                            }

                            td {
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
    }
`

export default ModalDetails
