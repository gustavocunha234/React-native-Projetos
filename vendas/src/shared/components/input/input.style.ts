import styled from "styled-components/native"
import { theme } from "../../themes/themes"
import { Icon } from "../icon/Icon";


interface ContainerInputProps {
        isError?: boolean;
        hasSecureTextEntry?:boolean;
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

        padding-right: ${(props:any) => (props.hasSecureTextEntry ? '52px' : '16px')};

`;


export const IconEye = styled(Icon)`
        position: absolute;
        right: 16px;
        top: 12px;



`;
