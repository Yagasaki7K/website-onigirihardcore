import styled from 'styled-components'
import colors from './Colors'
import { screenSize, device } from './Breakpoints'


const HeaderDetails = styled.div`

    .header {
        display: flex;
        padding: 1rem 15rem;
        justify-content: space-between;

        @media (${device.desktop}) {
            padding: 1rem 6rem;
        }

        @media (${device.laptopL}) {
            padding: 1rem 4rem;
        }

        @media (${device.laptop}) {
            padding: 1rem 3rem;
        }


        @media (${device.tabletL}) {
            .advice {
                display: none;
            }
        }

        .logotipo {
            width: 32rem;
            margin-top: 0.5rem;

            @media (max-width: 414px) {
                width: 20rem;
            }
        }
    }
    
    .navigation {
        background: ${colors.blue};
        display: flex;
        height: 3rem;
        width: 100%;

        @media (${device.tablet}) {
            height: 21rem;
            border-radius: 15px;
            background: transparent;
        }
        
        ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            color: ${colors.white};
            margin-left: 23rem;
            background: ${colors.blue};

            #item-menu {
                display: flex;
            }

            .burguer {
                display: none;
            }

            @media (${device.laptop}) {
                margin-left: 5rem;
            }

            @media (${device.tablet}) {
                #item-menu {
                    display: none;
                }

                .burguer {
                    display: block;
                }

                margin-left: 0;
                height: 3rem;
            }

            @media (${device.tablet}) {
                margin-left: 0;
                flex-direction: column;
                align-items: center;
                text-align: center;
                
                width: 100%;
                border-radius: 15px;

                .burguer {
                    display: initial;
                }
            }

            li {
                display: flex;
                padding: 0.7rem 1rem;
                

                @media (${device.tablet}) {
                    margin-left: 0.625rem;
                    padding: 0.7rem 0;
                }

                @media (${device.tablet}) {
                    margin-left: 2rem;
                    padding: 0.7rem 0;
                }
                
                margin: 0;
                font-size: 1rem;
                font-weight: 400;
                cursor: pointer;
                transition: 0.3s;
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;

                Link {
                    color: ${colors.white};
                    text-decoration: none;
                }

                :hover {
                    border-bottom: 4px solid ${colors.white};
                    
                    @media (${device.tablet}) {
                        background: ${colors.blue};
                        
                        :hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
`

export default HeaderDetails