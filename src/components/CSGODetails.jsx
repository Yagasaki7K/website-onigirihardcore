import styled from 'styled-components';
import { screenSize, device } from './Breakpoints'


const CSGODetails = styled.div`

.news {
    border-top: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
        color: #00acff;
        width: 30rem;
    }

    p {
        font-style: italic;
        width: 30rem;
    }
}

.matches {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .match {
        width: 100%;
        flex-direction: row;
    }
    
    a {
        text-decoration: none;
    }

    .championship {
        width: 4rem;
        margin-bottom: -1.6rem;
    }
    
    img {
        width: 3.5rem;
    }

    .x {
        margin: 2rem;
    }

    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
}
    
`

export default CSGODetails