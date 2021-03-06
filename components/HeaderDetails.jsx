import styled from 'styled-components'
import colors from './Colors'

const HeaderDetails = styled.div`

    .header {
        display: flex;
        padding: 1rem 20rem;
        justify-content: space-between;

        @media (max-width: 1366px) {
            padding: 1rem 2rem;
        }

        @media (max-width: 1024px) {
            .advice {
                display: none;
            }
        }

        .logotipo {
            width: 32rem;
            margin-top: 1.2rem;

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

        @media (max-width: 600px) {
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

            @media (max-width: 1366px) {
                margin-left: 5rem;
            }

            @media (max-width: 768px) {
                #item-menu {
                    display: none;
                }

                .burguer {
                    display: block;
                }

                margin-left: 0;
                height: 3rem;
            }

            @media (max-width: 600px) {
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
                

                @media (max-width: 768px) {
                    margin-left: 0.625rem;
                    padding: 0.7rem 0;
                }

                @media (max-width: 600px) {
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
                    
                    @media (max-width: 600px) {
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