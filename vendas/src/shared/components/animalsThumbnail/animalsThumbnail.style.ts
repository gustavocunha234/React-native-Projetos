import styled from "styled-components/native";
import { theme } from "../../themes/themes";


interface ContainerProps {
    margin?: string;
}

export const AnimalsThumbnailContainer = styled.TouchableOpacity<ContainerProps>`
    height: 120px;
    border-radius: 4px;
    width: 200px;
    border: 2px solid ${theme.colors.neutralTheme.black};
    padding: 7px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${(props: any) => props.margin || '10px'};
`

export const AnimalImage = styled.Image`
   width: 100%;
  height: 50px;
  margin-bottom: 15px;

  border-radius: 8px;

`