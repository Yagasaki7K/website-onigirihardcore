import styled from 'styled-components'
import colors from './Colors'

const CategoriesDetails = styled.div `
    display: flex;
    justify-content: center;
    padding: 30px 20rem;

    @media (max-width: 1366px) {
        margin-top: 1rem;
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

            :hover {
                width: 22rem;
                transform: scale(1.025);
            }
        }

        a {
            text-decoration: none;

            h1 {
                width: 22rem;
                color: ${colors.blue};
            }
        }

        span {

            i {
                font-style: normal;
                color: ${colors.graydark};
            }

            p {
                width: 22rem;
                color: ${colors.graydark}
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
                    h3 {
                        margin-left: 5rem;
                        margin-top: -4.2rem;
                        margin-bottom: 5px;
                        width: 18rem;
                        font-weight: 600;
                        font-size: 16px;
                        text-transform: initial;
                        line-height: 20px;
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
                    }
                }
            }
        }
    }
`

export default CategoriesDetails