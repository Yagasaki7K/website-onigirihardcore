import styled from 'styled-components'
import colors from './colors'

const TecnologiesDetails = styled.div `
    display: flex;
    justify-content: center;
    margin-top: -2rem;
    margin-left: -30px;

    padding: 30px 0;

    .tecnologies {
        margin-left: -8rem;
        
        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 63rem;

            p {
                width: 6rem;
                background: ${colors.blue};
                color: ${colors.white};
                padding: 5px 10px;
                margin-bottom: -2px;
                font-weight: bold;
            }
        }

        .content, .secondContent {
            display: flex;
            margin-left: -1rem;
                
            a {
                text-decoration: none;
                color: ${colors.white};

                img {
                    margin-top: 1rem;
                    margin-left: 1rem;
                    width: 15rem;
                    height: 12rem;
                    padding: 0;
                    object-fit: cover;
                }

                :hover {
                    color: ${colors.blue};
                }

                .title {
                    margin-left: 1.5rem;
                    margin-top: -10rem;

                    h1 {
                        width: 14rem;
                        font-size: 1.2rem;
                        margin-bottom: 0rem;
                    }

                    i {
                        font-style: normal;
                        font-size: 0.8rem;
                    }
                }
            }
        }

        .secondContent {
            margin-top: 2rem;
        }
    }
`

export default TecnologiesDetails