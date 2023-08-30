import styled from "styled-components/native";


interface ContainerTextProps {
    color?: string;
    fontSize: string;
    margin?: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}


export const ContainerText = styled.Text<ContainerTextProps>`

    
    font-size: ${(props: any) => props.fontSize };
    font-family: ${(props: any) => props.fontFamily };
    padding-top: 3px;
    ${(props:any) => (props.color ? `color: ${props.color};` : '')}
    ${(props:any) => (props.margin ? `margin: ${props.margin};` : '')}
    
    

    


    
`;

