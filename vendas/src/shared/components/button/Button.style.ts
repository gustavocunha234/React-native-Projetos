import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { theme } from '../../themes/themes';


interface ButtonContainerProps {
        margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
        width: 100%;
        height: 48px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-radius: 20px;
        ${(props: any) => (props.margin ? `margin: ${props.margin};` : '')}
        
`;

export const GradientButton = styled(LinearGradient) <ButtonContainerProps>`
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-radius: 20px;
        ${(props: any) => (props.margin ? `margin: ${props.margin};` : '')}
`;


export const ButtonSecondary = styled(ButtonContainer) <ButtonContainerProps>`
        ${(props: any) => (props.margin ? `margin: ${props.margin};` : '')}

        background-color: transparent;

        border-width: 1px;
        border-color: ${theme.colors.mainTheme.primary};
       
`;

export const ButtonDisabled = styled(ButtonContainer) <ButtonContainerProps>`

        background-color: ${theme.colors.grayTheme.gray100};

`;


export const ActivityIndicatorButton = styled.ActivityIndicator`
        margin-left: 8px;

`;