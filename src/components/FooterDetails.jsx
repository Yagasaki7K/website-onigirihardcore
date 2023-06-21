import styled from 'styled-components'
import { colors } from './variables'

const FooterDetails = styled.div`
    .imgfooter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -4rem 0 1rem 0;

        img {
            width: 30rem;

            @media (max-width: 500px) {
                width: 20rem;
            }

            @media (max-width: 320px) {
                width: 18rem;
            }
        }
    }

    .footer {
        width: 100%;
        background: ${colors.blackdark};
        color: ${colors.white};
        display: flex;
        padding: .5rem 0;
        justify-content: center;

        @media (max-width: 500px) {
           font-size: 0.9em ;
           display: block;
           padding: 10px;
           text-align: center;
       }

       a {
            text-decoration: none;
            color: ${colors.white};
        }
    }

`

export default FooterDetails
