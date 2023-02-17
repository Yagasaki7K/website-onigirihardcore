import styled from 'styled-components'
import colors from './Colors'
import { screenSize, device } from './Breakpoints'

const SlideDetails = styled.div`
    .keen-slider {
        width: 100%;
        height: 40rem;

        @media (${device.laptop}) {
            height: 30rem;
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

                @media (${device.laptop}) {
                    top: 50%;
                }

                .slide-tag {
                    color: ${colors.gray};

                    .latest {
                        padding: 2px 10px;
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