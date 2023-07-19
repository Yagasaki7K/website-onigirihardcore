import styled from 'styled-components'
import { colors } from './variables'

const LastNewsDetails = styled.div`
    .container {
        margin: -5rem 0rem 5rem 27.5rem;
        padding: 30px 0;

        @media (max-width: 1440px) {
            margin: -2rem 0rem 5rem 13rem;
            display: inline-block;
            padding: 0px;
        }

        @media (max-width: 1366px) {
            margin: -2rem 0rem 5rem 5rem;
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

        .header {
            border-bottom: 2px solid ${colors.blue};
            width: 63rem;
            margin-bottom: 1rem;

            @media (max-width: 1366px) {
                width: 71rem;
            }

            @media (max-width: 1024px) {
                width: 55rem
            }

            @media (max-width: 768px) {
                width: 40rem;
                margin-left: -1rem;
                margin-bottom: -0.5rem;
            }

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
            display: flex;
            
            .leftContent {
                margin-top: 2rem;

                @media (max-width: 1366px) {
                    margin-left: 5rem;
                }

                @media (max-width: 1024px) {
                    margin-left: -3rem;
                }

                img {
                    width: 290px;
                    height: 150px;
                    margin: 0rem 1rem 1rem 4rem;

                    @media (max-width: 768px) {
                        width: 200px;
                        height: 100px;
                        margin: 0rem 1rem 1rem 2rem;
                    }
                }

                hr {
                    position: absolute;
                    width: 60rem;

                    @media (max-width: 1024px) {
                        width: 55rem;
                        margin-left: 3rem;
                    }

                    @media (max-width: 768px) {
                        width: 40rem;
                        margin-left: 2rem;
                    }
                }
            }

            .rightContent {
                margin-top: 0.5rem;
                margin-left: 2rem;

                a {
                    :hover {
                        color: ${colors.blue};
                    }
                }

                h1 {
                    font-size: 1.5rem;
                    width: 30rem;
                    margin-bottom: 0rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    @media (max-width: 768px) {
                        width: 25rem;
                        font-size: 1rem;
                    }
                }

                .categories {
                    display: flex;
                    align-items: center;
                    margin-top: 0.5rem;
                    
                    span {
                        margin-right: 1rem;
                        background: ${colors.blue};
                        padding: 0.2rem 0.5rem;
                        font-weight: bold;
                        font-size: 0.8rem;
                        color: ${colors.white};
                    }
                }

                p {
                    width: 30rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    @media (max-width: 768px) {
                        width: 25rem;
                        font-size: 0.8rem;
                    }
                }

                i {
                    font-style: normal;
                    font-size: 0.9rem;

                    @media (max-width: 768px) {
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
`

export default LastNewsDetails