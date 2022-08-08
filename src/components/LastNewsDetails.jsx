import styled from 'styled-components'
import colors from './Colors'

const TecnologiesDetails = styled.div `
    display: flex;
    justify-content: center;
    margin: -2rem 0 5rem -30px;

    padding: 30px 0;

    .tecnologies {
        margin-left: -8rem;

        @media (max-width: 1366px) {
            margin-left: 1rem;
        }
        
        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 63rem;

            @media (max-width: 1366px) {
                width: 71rem;
            }

            p {
                width: 9rem;
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

                    @media (max-width: 1366px) {
                        width: 17rem;
                    }
                }

                :hover {
                    color: ${colors.blue};
                }

                .title {
                    margin-left: 1.5rem;
                    margin-top: -7rem;

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