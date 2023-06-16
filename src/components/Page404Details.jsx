import styled from "styled-components";
import { colors } from "./variables";

const Page404Details = styled.div`
    .error_description {
        text-align: center;
        
        h1 {
            color: ${colors.whitelight};
        }

        button {
            display: flex;
            margin-top: 40px;
            margin-left: 600px;
            margin-right: 600px;
            background-color: ${colors.blue};
        }

    }
`;
export default Page404Details;
