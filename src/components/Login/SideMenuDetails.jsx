import styled from 'styled-components'

const SideMenuDetails = styled.div`
    padding: 1rem;
    background: #15171b;
    color: #fff;
    width: 18rem;
    margin-right: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    img {
        width: 15rem;
        margin-top: 1rem;
    }

    ul {
        list-style: none;
        margin-left: -2.5rem;

        i {
            font-size: 1.5rem;
            margin-right: 1rem;
        }

        li {
            font-size: 1.2rem;
            border-top: 1px solid #e5e5e5;
            padding: 1rem 0.5rem;

            :hover {
                transition: 1s;
                padding: 1rem 1rem;
                background: #00acff;
                color: #fff;
                cursor: pointer;
            }
        }
    }
`

export default SideMenuDetails