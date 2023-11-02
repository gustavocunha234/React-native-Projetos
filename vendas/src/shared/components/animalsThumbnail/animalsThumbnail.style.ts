import styled from "styled-components/native";
import { theme } from "../../themes/themes";


interface ContainerProps {
    
}

export const AnimalsThumbnailContainer = styled.TouchableOpacity<ContainerProps>`
    height: 120px;
    border-radius: 4px;
    width: 40px;
    border: 1px solid ${theme.colors.grayTheme.gray80};
    padding: 8px;
`

export const AnimalImage = styled.Image`
    width: 100%;
    height: 50px;
    margin-bottom: 8px;

`