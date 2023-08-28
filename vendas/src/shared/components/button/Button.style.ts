import styled from 'styled-components/native';


interface ButtonContainerProps {
        margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
        width: 100%;
        height: 48px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        ${(props: any) => (props.margin ? `margin: ${props.margin};` : '')}
        background-color: blue;
        
`;