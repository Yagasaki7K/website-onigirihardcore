import styled from 'styled-components'

const FooterDetails = styled.div`
    background: var(--background);

    .imgfooter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2.5rem 0;

        img {
            margin-top: -4rem;
            width: 35rem;
            height: 6rem;

            @media (max-width: 768px) {
                margin-bottom: 1rem;
                height: 4rem;
            }

            @media (max-width: 500px) {
                width: 20rem;
                margin-top: 0rem;
            }

            @media (max-width: 320px) {
                width: 18rem;
                margin-top: 0rem;
            }
        }

        .uwu {
            width: 35rem;
            height: 7.5rem;
        }
    }

    .footer {
        width: 100%;
        background: var(--background-alt);
        color: var(--font);
        display: flex;
        padding: .5rem 0;
        justify-content: center;

        @media (max-width: 768px) {
            font-size: 0.9rem;
            text-align: center;

            p {
                max-width: 40rem;
            }
        }

        @media (max-width: 500px) {
            display: block;
            padding: 10px;
            text-align: center;
        }

        a {
            text-decoration: none;
            color: var(--font);
        }
    }

`

export default FooterDetails
