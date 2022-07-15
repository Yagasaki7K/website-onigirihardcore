import styled from 'styled-components'
import colors from './Colors'

const SlugDetails = styled.div `

    section {
        margin-bottom: 5rem;
        img {
            width: 100%;
            height: 30rem;
            object-fit: cover;
        }

        h1 {
            margin-top: 1rem;
            margin-left: 23rem;

            @media (max-width: 1366px) {
                margin-left: 6rem;
                width: 80rem;
            }

            width: 80rem;
            color: ${colors.blue};
            font-size: 3rem;
            font-weight: 700;
            line-height: 50px;
            text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);
        }

        .block__content {
            display: block;
            width: 80rem;
            margin-left: 23rem;
            font-size: 1.1rem;

            @media (max-width: 1366px) {
                margin-left: 6rem;
            }
        }
    }
`

export default SlugDetails