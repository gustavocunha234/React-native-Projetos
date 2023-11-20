import styled from "styled-components/native";
import { theme } from "../../../shared/themes/themes";

export const ContainerLogin = styled.View `
        height: 100%;
        width: 100%;
        background-color: ${theme.colors.neutralTheme.white};
        justify-content: center;
        align-items: center;
        padding: 16px;

`;

export const ImageLogo = styled.Image`
   width: 300px;
   height: 300px;
   margin-top: -250px;
`;