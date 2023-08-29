import styled from "styled-components/native";


interface ContainerTextProps {
    color?: string;
    fontSize: string;
}


export const ContainerText = styled.Text<ContainerTextProps>`



    font-family: poppins-bold;
    font-size: ${(props: any) => props.fontSize };
    ${(props:any) => (props.color ? `color: ${props.color}` : '')}
    

    


    
`;

