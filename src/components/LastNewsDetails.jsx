import styled from 'styled-components'
import { colors } from './variables'

const LastNewsDetails = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;

    .container {
        width: 100%;

        :hover {
            h1 {
                color: ${colors.blue};
            }

            cursor: pointer;
        }

        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 100%;

            p {
                width: 10rem;
                background: ${colors.blue};
                color: ${colors.white};
                padding: 5px 10px;
                margin-bottom: -2px;
                font-weight: bold;
            }
        }

        .content {
            width: 100%;

            display: flex;
            align-items: center;
            gap: 30px;

            padding: 20px 0px;

            border-bottom: 2px solid white;

            .leftContent {
                img {
                    width: 290px;
                    height: 150px;
                    overflow: hidden;
                    object-fit: cover;
                    position: relative;

                    @media (max-width: 835px) {
                        width: 200px;
                        height: 100px;
                    }

                    @media (max-width: 470px){
                        width: 150px;
                        height: 100px;
                    }
                }
            }

            .rightContent {
                width: 70%;

                h1 {
                    font-size: 1.5rem;
                    margin-bottom: 0rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    @media (max-width: 835px) {
                        width: 25rem;
                        font-size: 1rem;
                    }

                    @media (max-width: 670px){
                        width: 100%;
                        font-size: 0.85rem;
                    }
                }

                .categories {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    margin-top: 0.5rem;

                    span {
                        padding: 0.2rem 0.5rem;
                        font-weight: bold;
                        font-size: 0.8rem;
                        color: ${colors.white};

                        @media (max-width: 530px){
                            font-size: 0.6rem;
                        }
                    }

                    .tecnologies {
                        background: ${colors.blue};
                    }

                    .animes {
                        background: #ff6ca4;
                    }

                    .movies {
                        background: #6272a4;
                    }

                    .games {
                        background: #faa74e;
                    }

                    .development {
                        background: #bd93f9;
                    }
                }

                p {
                    width: 100%;

                    display: -webkit-box;
                    -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                i {
                    font-style: normal;
                    font-size: 0.9rem;

                    @media (max-width: 835px) {
                        font-size: 0.8rem;
                    }

                    @media (max-width: 500px){
                        font-size: 0.6rem;
                    }
                }
            }
        }
    }
`

export default LastNewsDetails
