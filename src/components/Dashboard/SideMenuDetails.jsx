import styled from "styled-components";

const SideMenuDetails = styled.div`
    padding: 1rem;
    background: var(--background-alt);
    color: var(--white);
    width: 18rem;
    margin-right: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
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
            border-top: 1px solid var(--gray);
            padding: 1rem 0.5rem;

            &:hover {
                transition: 1s;
                background: var(--blue);
                color: var(--white);
                cursor: pointer;
            }
        }
    }

    .active {
        font-size: 1.2rem;
        background: var(--blue);
        border-top: 1px solid var(--gray);
        padding: 1rem 0.5rem;
        :hover {
            transition: 1s;
            padding: 1rem 1rem;
            background: transparent;
            color: var(--white);
            cursor: pointer;
        }
    }
`;

export default SideMenuDetails;
