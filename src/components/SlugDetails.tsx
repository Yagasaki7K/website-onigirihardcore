import styled from 'styled-components'

const SlugDetails = styled.div`
    background: var(--background);
    font-size: 1.18rem;
    color: var(--font);

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;

        @media (max-width: 768px) {
            object-fit: contain;
            height: 20rem;
            margin-bottom: 3%;
        }
    }

    > span {
        width: 100% !important;
        display: block;
    }

    blockquote {
        margin: 1rem;

        p {
            font-style: italic;
            color: var(--blue-alt);
            border-left: 2px solid var(--blue-alt);
            padding-left: 1rem;
        }
    }

    section {
        margin: 0 auto 5rem auto;
        width: min(1100px, 100%);
        padding: 0 1.5rem 1rem;

        @media (min-width: 1921px) {
            width: min(70%, 1400px);
        }

        h1 {
            margin-top: -1rem;
            color: var(--blue);
            font-size: 2rem;
            font-weight: 700;
            line-height: 35px;
            text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);
        }

        h2 {
            color: var(--blue);
        }

        a {
            color: var(--blue);
        }

        .anchor {
            fill: var(--blue);
            margin-right: 0.2rem;
        }

        p {
            margin-bottom: 1.8rem;
            line-height: 1.5rem;
        }

        .keepUpdate {
            text-align: center;
            flex-direction: column;
            font-weight: 600;
            font-style: italic;
        }

        ul {
            margin-top: -1rem;
        }

        li {
            margin-left: -1rem;
        }

        .date {
            margin: 0;
            text-align: right;
        }

        .block__content {
            width: 100%;
            max-width: 100%;
            text-align: justify;
            font-size: 1.1rem;
            line-height: 1.5rem;

            .uil-share {
                cursor: pointer;
                color: var(--green);
                transition: 1s;

                &:hover {
                    color: var(--blue);
                }
            }
        }

        blockquote {
            background: var(--background-alt);
            padding: 1rem;
            font-size: 1rem;
            border-radius: 15px;
            font-style: italic;
            font-family: 'Cascadia Code', sans-serif;
        }

        .title__content {
            width: 100%;
            max-width: 60rem;

            @media (max-width: 768px) {
                font-size: 1.6em;
                line-height: 30px;
            }
        }

        .image__content {
            img {
                display: flex;
                justify-content: center;
                margin: 0 auto;
                width: 100%;
                max-width: 80%;
                height: 100%;
            }
        }

        .citation {
            font-weight: 100;
            font-style: italic;
            color: var(--blue);

            a {
                p {
                    font-size: 1.5rem;
                    border-left: 2px solid var(--blue);
                    padding-left: 1rem;
                    width: 100%;
                }

                :hover {
                    text-decoration: underline;
                }
            }
        }

        iframe {
            width: 100%;
            max-width: 60rem;
            margin-left: 0rem;
            height: clamp(20rem, 50vw, 38rem);
            border: none;

            @media (max-width: 768px) {
                height: 25rem;
            }
        }
    }
`

export default SlugDetails
