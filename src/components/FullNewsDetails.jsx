import styled from 'styled-components'
import { device, colors } from './variables'



const FullNewsDetails = styled.div`
    .fullnews {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 1rem;
        margin-left: 2rem;

        @media (${device.mobileL}) {
            margin: 0;
            font-size: 0.8em;

            h1{
                text-align: center;
            }
        }

        button {
            padding: 1rem 2rem;
            border-radius: 10px;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.2rem;
            background-color: ${colors.blue}};
            color: ${colors.graylight};
            border: none;
            margin-bottom: 2rem;
            cursor: pointer;
        }

        a {
            padding: 20px 120px 70px 40px;
            margin-bottom: 10px;
            width: 80%;
            

            @media (${device.mobileL}) {
                  padding: 0;
                  text-align: center;
            }

            :hover {
                transition: 1s;
                background: ${colors.blacklight};
            }

            img {
                width: 300px;
                height: 150px;
                border-radius: 5px;
                object-fit: cover;
            }

            .title {
                margin-top: -8rem;
                margin-left: 20rem;

                @media (${device.mobileL}) {
                  margin: 0;
                }
            }
        }
`
export default FullNewsDetails
