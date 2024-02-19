import styled from 'styled-components'

const LastNewsDetails = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;

    .container {
        width: 100%;

        :hover {
            h1 {
                color: var(--blue);
            }

            cursor: pointer;
        }

        .header {
            border-bottom: 2px solid var(--blue);
            width: 100%;

            p {
                width: 10rem;
                background: var(--blue);
                color: var(--white);
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

            border-bottom: 2px solid var(--gray);

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
                    color: var(--font);

                    &:hover {
                        color: var(--blue);
                        transition: 0.5s;
                    }

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
                        color: var(--white);

                        @media (max-width: 530px){
                            font-size: 0.6rem;
                        }
                    }

                    .tecnologies {
                        background: var(--blue);
                    }

                    .animes {
                        background: var(--red);
                    }

                    .movies {
                        background: var(--green);
                    }

                    .games {
                        background: var(--orange);
                    }

                    .development {
                        background: var(--purple);
                    }
                }

                p {
                    width: 100%;

                    display: -webkit-box;
                    -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: var(--font)
                }

                i {
                    font-style: normal;
                    font-size: 0.9rem;
                    color: var(--font);

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
