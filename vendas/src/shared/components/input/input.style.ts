import styled from "styled-components/native"
import { theme } from "../../themes/themes"


interface ContainerInputProps {
        isError?: boolean;
}

export const ContainerInput = styled.TextInput`
        width: 100%;
        height: 48px;
        padding: 16px;
        background-color: ${theme.colors.neutralTheme.white};
        border-radius: 4px;
        border-width: 1px;
        border-color: ${(props: any) => props.isError ? theme.colors.OrangeTheme.orange80 : theme.colors.grayTheme.gray80};
        color: ${theme.colors.neutralTheme.black};
        

`;
