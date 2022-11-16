import styled from 'styled-components';

const DashboardDetails = styled.div`
    display: flex;
    background: #1d1e26;

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 20px;
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

                input, textarea {
                    background: #1d1e26;
                    border: 1px solid #fff;
                    color: #fff;
                    padding: 0.5rem;
                    border-radius: 5px;
                    margin-top: 10px;
                    font-family: 'Poppins', sans-serif;
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
