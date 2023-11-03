import styled from "styled-components/native";
import { theme } from "../../themes/themes";


interface ContainerProps {
    margin?: string;
}

export const AnimalRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px; 
`;

export const AnimalsThumbnailContainer = styled.TouchableOpacity<ContainerProps>`
    width: 175px;
    height: 180px;
    border-radius: 4px;
    border: 2px solid ${theme.colors.neutralTheme.black};
    padding: 7px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${(props: any) => props.margin || '10px'};
`

export const AnimalImage = styled.Image`
   width: 100%;
  height: 100px;
  margin-bottom: 15px;

  border-radius: 8px;

`