import styled from 'styled-components';
import { colors } from './variables';

const DashboardDetails = styled.div`
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

            .clrbtn {
                background: ${colors.yellow};
                border: none;
                padding: 0.8rem;
            }
        }

        .stats {
            display: none;
        }
    }
`

export default DashboardDetails
