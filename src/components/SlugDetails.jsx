import styled from 'styled-components'
import colors from './Colors'
import { screenSize, device } from './Breakpoints'

const SlugDetails = styled.div `

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
    }

    section {
        margin-left: 28rem;
        width: 50%;

        @media (${device.laptopL}) {
            margin-left: 20rem;
        }

        @media (${device.laptopL}) {
            margin-left: 14rem;
        }
        
        @media (${device.laptop}) {
            margin-left: 12rem;
        }
        
        margin-bottom: 5rem;
        background: ${colors.whitelight};
    
        h1 {
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
        }

        .block__content {
            width: 60rem;
            text-align: justify;
            font-size: 1.1rem;
            line-height: 1.5rem;
        }

        .title__content {
            width: 60rem;
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
            width: 60rem;
            margin-left: 0rem;
            height: 38rem;
        }
    }
`

export default SlugDetails