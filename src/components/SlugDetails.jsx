import styled from 'styled-components'
import colors from './Colors'

const SlugDetails = styled.div `

    section {
        margin-bottom: 5rem;
        background: ${colors.whitelight};
        
        img {
            width: 100%;
            height: 30rem;
            object-fit: cover;
        }

        h1 {
            margin-left: 39.5rem;

            @media (max-width: 1366px) {
                margin-left: 22rem;
                width: 50rem;
            }

            width: 50rem;
            color: ${colors.blue};
            font-size: 3rem;
            font-weight: 700;
            line-height: 50px;
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
            margin-left: 26rem;
            font-size: 1.1rem;
            line-height: 1.5rem;

            @media (max-width: 1366px) {
                margin-left: 8rem;
            }

        }

        iframe {
            width: 70rem;
            margin-left: 26rem;
            height: 38rem;

            @media (max-width: 1366px) {
                margin-left: 8rem;
            }
        }
    }
`

export default SlugDetails