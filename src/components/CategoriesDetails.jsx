import styled from 'styled-components'
import { colors } from './variables'

const CategoriesDetails = styled.div`

    width: 100%;
    max-width: 1200px;

    display: flex;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;

    @media (max-width: 655px){
        flex-direction: column;
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
        flex-grow: 1;

        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 100%;

            margin-bottom: 10px;
        }

        img {
            width: 100%;
            height: 22rem;
            object-fit: cover;
            transition: 0.5s all ease-in-out;

            :hover {
                transform: scale(1.025);
            }  
        }

        .categories-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-decoration: none;

            h1 {
                width: 100%;
                color: ${colors.blue};
                display: -webkit-box;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;

                margin: 0;

                @media (max-width: 1225px){
                    font-size: 1.5rem;
                }

                @media (max-width: 925px){
                    font-size: 1.3rem;
                }

                @media (max-width: 850px){
                    font-size: 1rem;
                }

            }
        }

        span {
            i {
                font-style: normal;
                color: ${colors.graydark};
            }

            p {
                width: 100%;
                max-height: 5rem;
                color: ${colors.graydark};
                display: -webkit-box;
                -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .posts {
            width: 100%;
            .post {
                display: flex;
                padding: 20px 0px 10px 0px;
                border-bottom: 2px solid white;

                a {
                    width: 100%;
                    display: flex;
                    gap: 15px;
                }

                img {
                    width: 4.063rem;
                    height: 4.063rem;
                }

                .post-side {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h3 {
                        width: 100%;

                        font-weight: 600;
                        font-size: 16px;
                        text-transform: initial;
                        line-height: 20px;

                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;

                        overflow: hidden;
                        text-overflow: ellipsis;

                        margin: 0;
                    }

                    color: ${colors.text};
                    text-decoration: none;

                    i {
                        font-style: normal;
                        color: ${colors.graydark};
                    }
                }
            }
        }
    }

`

export default CategoriesDetails
