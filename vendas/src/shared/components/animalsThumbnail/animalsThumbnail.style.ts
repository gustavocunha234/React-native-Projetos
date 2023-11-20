import styled from "styled-components/native";
import { theme } from "../../themes/themes";
import { Overlay } from "native-base";


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
    border-radius: 5px;
    padding: 2px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${(props: any) => props.margin || '14px'};
`

export const AnimalImage = styled.Image`
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  border-radius: 25px;

`
export const animalsTextContainer = styled.TouchableOpacity`

`
