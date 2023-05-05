import styled from 'styled-components'
import { colors } from './variables'

const SlideDetails = styled.div`
    .keen-slider {
        width: 100%;
        height: 40rem;

        @media (max-width: 1366px) {
            height: 30rem;
            width: 100%;
        }
       
        @media (max-width: 500px) {
            width: 28rem;
        }

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
                    width: 100%;
                }

                @media (max-width: 768px) {
                 width: 100%;
            
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
                    color: ${colors.gray};

                    @media (max-width: 500px) {
                         font-size: 0.8em;
                         width: 300px;
                     }

                    .latest {
                        padding: 2.5px 10px;
                        background: ${colors.orange};
                        font-size: 0.9rem;
                        font-weight: bold;
                    }

                    .tag {
                        padding: 2.6px 10px;
                        background: ${colors.blue};
                        font-size: 0.9rem;
                        font-weight: bold;
                    }

                    .date {
                        margin-left: 10px;
                        font-weight: 300;
                    }

                    .author {
                        text-decoration: underline;

                        a {
                            color: ${colors.white};
                        }
                    }

                    @media (max-width: 320px) {
                        font-size: 0.8em;
                        transform: scale(0.8);
                    }

                }

                h1 {
                    margin-top: 10px;
                    color: ${colors.white};
                    font-size: 3rem;
                    font-weight: 700;
                    line-height: 50px;
                    text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);

                    a {
                        text-decoration: none;
                        color: ${colors.white};
                    }

                    @media (max-width: 500px) {
                        font-size: 1.8em;
                   }

                   @media (max-width: 320px) {
                        font-size: 1.5em;
                        transform: scale(0.8);
                    }
                }

                p {
                    font-size: 1.2rem;
                    line-height: 1.5rem;
                    color: ${colors.white};
                    border-left: 5px solid ${colors.blue};
                    padding-left: 10px;
                    max-width: 50rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    @media (max-width: 320px) {
                        font-size: 1.5em;
                        transform: scale(0.8);
                    }

                    a {
                        text-decoration: none;
                        color: ${colors.white};
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
        color: ${colors.white};
        border-bottom: 1px solid ${colors.white};

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
