import styled from 'styled-components';

const DashboardDetails = styled.div`
    display: flex;
    background: var(--background);

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 20px;
        margin-bottom: 1rem;
        background: var(--background);
        font-family: 'Poppins', sans-serif;

        h1 {
            color: var(--white);
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
                    background: var(--background);
                    border: 1px solid var(--white);
                    color: var(--white);
                    padding: 0.5rem;
                    border-radius: 5px;
                    margin-top: 10px;
                    font-family: 'Poppins', sans-serif;
                }

                textarea {
                    height: 120px;
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

                .markdown-editor {
                    background: var(--background);

                    * {
                        background: transparent;
                    }
                }
            }

            button {
                margin-top: 1rem;
                padding: 0.5rem;
                border: 1px solid var(--white);
                border-radius: 5px;
                background: var(--background-alt);
                color: var(--white);
                cursor: pointer;
                margin-right: 1rem;
                font-size: 0.8rem;

                &:hover {
                    background: var(--white);
                    color: var(--background-alt);
                    transition: 1s;
                }
            }

            .sendbtn {
                background: var(--green);
                border: none;
                padding: 0.8rem;
                color: var(--font-black);
            }

            .clrbtn {
                background: var(--yellow);
                border: none;
                padding: 0.8rem;
                color: var(--font-black);
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
                        color: var(--white);
                        padding: 0.5rem;
                        text-align: center;

                        button {
                            margin-right: 1rem;
                            margin-left: -4.5rem;
                        }

                        .editar {
                            background: var(--yellow);
                            color: var(--white);
                            border: none;
                            padding: 10px;
                            margin-right: -1rem;
                        }

                        .deletar {
                            background: var(--red);
                            color: var(--white);
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

export default DashboardDetails
