import styled from 'styled-components'
import colors from './Colors'
import { screenSize, device } from './Breakpoints'

const FooterDetails = styled.div`

    .imgfooter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0 2rem 0;
        
        img {
            width: 30rem;
        }
    }

    .footer {
        width: 100%;
        background: #1d1e26;
        color: ${colors.white};
        display: flex;
        padding: .5rem 0;
        justify-content: center;

        a {
            text-decoration: none;
            color: ${colors.white};
        }
    }
`

export default FooterDetails