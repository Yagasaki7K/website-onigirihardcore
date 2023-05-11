import styled from 'styled-components'
import { colors } from './variables'

const TecnologiesDetails = styled.div`
        display: flex;
        justify-content: center;
        margin: -2rem 0 5rem 7rem;
        padding: 30px 0;

        @media (max-width: 1366px) {
            display: inline-block;
            padding: 0px;
        }

        @media (max-width: 768px) {
              display: block;
              padding: 0px;
       }

        @media (max-width: 500px) {
              display: inline-block;
              padding: 0px;
       }

       .tecnologies {
        margin-left: -8rem;

        @media (max-width: 1366px) {
            margin-left: -2rem;
        }

        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 63rem;

            @media (max-width: 1366px) {
                width: 71rem;
            }

            @media (max-width: 768px) {
              margin-left: 5%;
             }

            p {
                width: 9.5rem;
                background: ${colors.blue};
                color: ${colors.white};
                padding: 5px 10px;
                margin-bottom: -2px;
                font-weight: bold;
            }
        }

        .content, .secondContent, .thirdContent {
            display: flex;
            margin-left: -1rem;

        @media (max-width: 1024px) {
            display: inline-block;
            margin-left: 2%;
            width: 25%;
        }

          @media (max-width: 900px) {
            display: inline-block;
            margin-left: 2%;
            width: 40%;
          }


            @media (max-width: 768px) {
                display: inline-block;
                margin-left: 5%;
                width: 45%;
             }

            @media (max-width: 500px) {
                display: inline-block;
                padding: 2px;
            }


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
                    transform: scale(1.05);
                    transition: 1s;
                }

                .title {
                    margin-left: 1.5rem;
                    margin-top: -7rem;

                    h1 {
                        width: 14rem;
                        margin-top: -2rem;
                        font-size: 1.2rem;
                        margin-bottom: 0rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    i {
                        font-style: normal;
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
    `

export default TecnologiesDetails
