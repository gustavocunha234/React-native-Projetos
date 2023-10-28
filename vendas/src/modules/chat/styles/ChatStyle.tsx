import styled from "styled-components/native";
import { theme } from "../../../shared/themes/themes";

export const CreateChatContainer = styled.ScrollView`
    background-color: ${theme.colors.neutralTheme.white};
    display: flex;
    padding: 20px;
   
`

export const MessageContainer = styled.View`
    display: flex;
    backgroundColor: #fff;
    width: 220px;
    margin-bottom: 20px;
    padding: 15px 15px;
    border-radius: 25px;
    margin-left: ${({ me }: { me: boolean }) => (me ? "40%" : "0%")};
    margin-right: ${({ me }: { me: boolean }) => (me ? "0%" : "40%")};

`

export const MessageText = styled.Text`
    color: #000;
    font-weight: 600;
    backgroundColor: ${({ me }: { me: boolean }) => (me ? "#5b9279" : "#fff")};
`

export const ChatContainer = styled.View`


`