import styled from 'styled-components'
import colors from './Colors'

const SlugDetails = styled.div `

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
    }

    section {
        margin-left: 28rem;

        @media (max-width: 1366px) {
            margin-left: 1rem;
            width: 90%;
        }

        width: 50%;

        margin-bottom: 5rem;
        background: ${colors.whitelight};
    
        h1 {
        
            @media (max-width: 1366px) {
                margin-left: 8rem;
            }

            margin-top: -1rem;

            color: ${colors.blue};
            font-size: 2rem;
            font-weight: 700;
            line-height: 35px;
            text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);
        }

        .date {
            margin-bottom: 0rem;
            margin-left: 48rem;

            @media (max-width: 1366px) {
                margin-left: 3rem;
            }
        }

        .block__content {
            width: 70rem;
            text-align: justify;
            font-size: 1.1rem;
            line-height: 1.5rem;

            @media (max-width: 1366px) {
                margin-left: 8rem;
            }
        }

        .citation {
            font-weight: 100;
            font-style: italic;
            color: ${colors.blue};

            p {
                font-size: 1.5rem;
                border-left: 2px solid ${colors.blue};
                padding-left: 1rem;
            }
        }

        iframe {
            width: 70rem;
            margin-left: 0rem;
            height: 38rem;

            @media (max-width: 1366px) {
                margin-left: 7.5rem;
            }
        }
    }
`

export default SlugDetails