import styled from 'styled-components'

const SlideDetails = styled.div`

    .keen-slider-skeleton {
        width: 100%;
        height: 40rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #ffffff1a;
    }

    .keen-slider {
        width: 100%;
        height: 40rem;

        @media (max-width: 1366px) {
            height: 30rem;
        }

        @media (max-width: 500px) {
            width: 28rem;
        }

        a {
            text-decoration: none;
        }

        img {
            width: 100%;
            height: 40rem;
            object-fit: cover;
            filter: brightness(50%);

            @media (max-width: 1366px) {
                height: 30rem;
            }

            @media (max-width: 500px) {
                width: 28rem;
            }
        }

        .keen-slider__slide {
            width: 100%;

            .slider-description {
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-transform: initial;
                line-height: 40px;
                text-align: left;
                width: 58rem;

                @media (max-width: 1366px) {
                    width: 80%;
                }

                @media (max-width: 500px) {
                    width: 85%;
                    transform: scale(0.9);
                    left: 0;
                    top: 15%;
                }

                @media (max-width: 375px) {
                    left: -2%;
                    width: 75%;
                }

                @media (max-width: 320px) {
                    left: -10%;
                }

                .slide-tag {
                    color: var(--white);

                    @media (max-width: 500px) {
                         font-size: 0.8em;
                         width: 300px;
                         margin-top: 50px;
                     }

                    .latest {
                        padding: 2.5px 10px;
                        background: var(--orange);
                        font-size: 0.9rem;
                        font-weight: bold;
                    }

                    .tag {
                        padding: 2.6px 10px;
                        font-size: 0.9rem;
                        font-weight: bold;
                    }

                    .tecnologies, .animes, .movies, .games, .development {
                        padding: 2.6px 10px;
                        margin: 0 -10px;
                    }

                    @media (max-width: 768px) {
                        .latest {
                            padding: 2.5px 8px;
                            background: var(--orange);
                            font-size: 0.8rem;
                            font-weight: bold;
                        }

                        .tag {
                            padding: 2px 8px;
                            font-size: 0.8rem;
                            font-weight: bold;
                        }

                        .date, .author {
                            display: none;
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
                        background: var(--yellow);
                    }

                    .development {
                        background: var(--purple);
                    }

                    .date {
                        margin-left: 10px;
                        font-weight: 300;
                    }

                    .author {
                        text-decoration: underline;

                        a {
                            color: var(--white);
                        }
                    }

                    @media (max-width: 320px) {
                        font-size: 0.8em;
                        transform: scale(0.8);
                    }
                }

                h1 {
                    margin-top: 10px;
                    color: var(--white);
                    font-size: 3rem;
                    font-weight: 700;
                    line-height: 50px;
                    text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);

                    a {
                        text-decoration: none;
                        color: var(--white);
                    }

                    @media (max-width: 500px) {
                        font-size: 1.8em;
                        line-height: 40px;
                   }

                   @media (max-width: 320px) {
                        font-size: 1.5em;
                        transform: scale(0.8);
                    }
                }

                p {
                    font-size: 1.2rem;
                    line-height: 1.5rem;
                    color: var(--white);
                    border-left: 5px solid var(--blue);
                    padding-left: 10px;
                    max-width: 50rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    @media (max-width: 320px) {
                        font-size: 1.5em;
                        transform: scale(0.8);
                    }

                    a {
                        text-decoration: none;
                        color: var(--white);
                    }
                }
            }
        }
    }

    .keen-slider_navigation {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:center;
        height: 3rem;
        color: var(--white);
        border-bottom: 1px solid var(--white);

        a {
            text-decoration: none;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(50%);
        }

        .keen-slider__slide {
            width: 100%;

            .match {
                img {
                    width: 1rem;
                }
            }
        }
    }

    .keen-slider_csgo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:center;
    }
`

export default SlideDetails
