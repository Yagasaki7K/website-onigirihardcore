import styled from 'styled-components';

const DashboardDetails = styled.div`
    display: flex;
    background: #1d1e26;

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 20px;
        margin-bottom: 1rem;
        background: #1d1e26;
        font-family: 'Poppins', sans-serif;

        h1 {
            color: #fff;
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
                    background: #1d1e26;
                    border: 1px solid #fff;
                    color: #fff;
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
                width: 80%;
                margin-top: 1rem;

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
                border: 1px solid #fff;
                border-radius: 5px;
                background: #1d1e26;
                color: #fff;
                cursor: pointer;
                margin-right: 1rem;
            }
        }

        .stats {
            display: none;
        }
    }
`

export default DashboardDetails
