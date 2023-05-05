import styled from 'styled-components'
import { colors } from './variables'

const CategoriesDetails = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 20rem;

    @media (max-width: 1024px) {
        display: inline-block;
        padding: 10px;
        font-size: 1em;
    }

    @media (max-width: 768px) {
        display: inline-block;
        padding: 10px;
        font-size: 1em;
    }
    @media (max-width: 500px) {
        display: inline-block;
        padding: 20px;
        font-size: 0.8em;
    }

    @media (max-width: 375px) {
        padding: 12px;
    }

    @media (max-width: 320px) {
        padding: 0;
    }

    .animes, .games {
        width: 9.2rem;
        background: ${colors.blue};
        color: ${colors.text};
        padding: 5px 10px;
        margin-bottom: -2px;
        font-weight: bold;

    }

    .movies {
        width: 10rem;
        background: ${colors.blue};
        color: ${colors.text};
        padding: 5px 10px;
        margin-bottom: -2px;
        font-weight: bold;
    }

    .firstCategories, .secondCategories, .thirdCategories {
        margin-right: 30px;
        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 22rem;
        }

        img {
            margin-top: 10px;
            width: 22rem;
            height: 22rem;
            object-fit: cover;
            transition: 0.5s all ease-in-out;

            @media (max-width: 1024px) {
                width: 100%;
            }

            :hover {
                transform: scale(1.025);
            }


        }

        a {
            text-decoration: none;

            h1 {
                width: 22rem;
                color: ${colors.blue};
                display: -webkit-box;
                -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                @media (max-width: 1024px) {
                width: 90%;
            }

                @media (max-width: 320px) {
                  padding: 0;
                  width: 85%;
                }
            }
        }

        span {

            i {
                font-style: normal;
                color: ${colors.graydark};
            }

            p {
                max-width: 22rem;
                max-height: 5rem;
                color: ${colors.graydark};
                display: -webkit-box;
                -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

                @media (max-width: 1024px) {
                    max-width: 90%;
                }

                @media (max-width: 320px) {
                            max-width: 20rem;
               }
            }
        }

        .posts {
            .post {
                display: flex;

                img {
                    width: 4.063rem;
                    height: 4.063rem;

                }

                .post-side {
                    @media (max-width: 1024px) {
                            width: 100%;
                        }

                    h3 {
                        margin-left: 5rem;
                        margin-top: -4.5rem;
                        margin-bottom: 5px;
                        width: 18rem;
                        font-weight: 600;
                        font-size: 16px;
                        text-transform: initial;
                        line-height: 20px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        @media (max-width: 1024px) {
                            width: 80%;
                        }

                        @media (max-width: 320px) {
                            max-width: 15rem;
                            max-height: 5rem;
                       }
                    }

                    color: ${colors.text};
                    text-decoration: none;

                    :hover {
                        color: ${colors.blue};
                    }

                    i {
                        margin-left: 5rem;
                        font-style: normal;
                        color: ${colors.graydark};
                    }

                    hr {
                        width: 22rem;
                        margin-left: 0px;
                        border: 1px solid ${colors.graylight};

                    @media (max-width: 1024px) {
                        width: 100%;
                    }

                    }
                }
            }
        }
    }

`

export default CategoriesDetails
