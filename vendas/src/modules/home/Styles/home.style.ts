import styled from "styled-components/native";
import { theme } from "../../../shared/themes/themes";

export const ContainerHome = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};
  align-items: center;
  padding: 16px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: ${theme.colors.neutralTheme.white};
`


export const AnimalImage = styled.Image`
  background-color: #F18809;
  overflow: hidden;
  width: 100px;
  height: 100px;
  
`
export const HomeContainer = styled.View `
  padding: 8px;
  background-color: ${theme.colors.neutralTheme.white};
`