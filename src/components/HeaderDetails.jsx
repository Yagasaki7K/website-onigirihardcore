import styled from 'styled-components'
import colors from './Colors'

const HeaderDetails = styled.div `

    .header {
        display: flex;
        padding: 1rem 20rem;
        justify-content: space-around;

        .logotipo {
            width: 25rem;
            margin-top: 1.2rem;
        }
    }
    
    .navigation {
        background: ${colors.blue};
        height: 3rem;
        width: 100%;

        ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            color: #fff;
            margin-left: 23rem;

            li {
                padding: 0.7rem 1rem;
                margin: 0;
                font-size: 1rem;
                font-weight: 400;
                cursor: pointer;
                transition: 0.3s;
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;

                a {
                    color: #fff;
                    text-decoration: none;
                    padding-right: 2.5rem;
                }

                :hover {
                    transition: 1s;
                    background: ${colors.bluedark};
                }
            }
        }
    }
`

export default HeaderDetails