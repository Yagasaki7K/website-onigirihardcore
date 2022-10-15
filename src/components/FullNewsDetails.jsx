import styled from 'styled-components'

const FullNewsDetails = styled.div `
    .fullnews {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 70rem;
        margin-top: 1rem;
        margin-left: 28rem;

        button {
            padding: 1rem 2rem;
            border-radius: 10px;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.2rem;
            background-color: #01acfe;
            color: #e5e5e5;
            border: none;
            margin-bottom: 2rem;
            cursor: pointer;

            :hover {
                transition: 1s;
                transform: scale(1.05);
            }
        }

        @media (max-width: 1366px) {
            margin-left: 10rem;
        }
        

        a {
            padding: 20px 80px 70px 40px;
            margin-bottom: 10px;

            :hover {
                transition: 1s;
                transform: scale(1.05);
                background: #2f2f2f;
            }

            img {
                width: 300px;
                height: 150px;
                border-radius: 5px;
                object-fit: cover;
            }

            .title {
                margin-top: -10rem;
                margin-left: 22rem;
            }
        }
        
    }
`
export default FullNewsDetails