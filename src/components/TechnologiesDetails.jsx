import styled from 'styled-components'
import { colors } from './variables'

const TecnologiesDetails = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 1200px;

       .tecnologies {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .header {
                border-bottom: 2px solid ${colors.blue};
                width: 100%;

                p {
                    width: 12rem;
                    background: ${colors.blue};
                    color: ${colors.white};
                    padding: 5px 10px;
                    margin-bottom: -2px;
                    font-weight: bold;
                }
            }

        .content, .secondContent, .thirdContent {
            width: 100%;
            padding: 20px 0px;

            display: flex;
            align-items: center;
            flex-wrap: wrap;
            row-gap: 20px;
            column-gap: 10px;
            
            a {
                text-decoration: none;
                color: ${colors.white};
                flex-grow: 1;
                flex-basis: 260px;

                :hover {
                    color: ${colors.blue};
                    transition: 1s;
                }

                img {
                    width: 100%;
                    height: 12rem;
                    padding: 0;
                    object-fit: cover;
                    filter: brightness(60%);

                    @media screen and(max-width: 909px){
                        width: 30rem;
                    }
                }

                .title {
                    position: absolute;
                    margin-left: 1.5rem;
                    margin-top: -7rem;

                    h1 {
                        width: 14rem;
                        margin-top: 0rem;
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
