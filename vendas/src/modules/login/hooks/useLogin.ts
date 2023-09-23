import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import  { ConnectionAPIPost } from "../../../shared/functions/connection/connectionAPI";
import { useRequest } from "../../../shared/hooks/useRequest";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {authRequest, loading, setErrorMessage, errorMessage} = useRequest();



    const handleOnPress = async () => {
        authRequest({
            email,
            password,
        });
    };

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text);
    };

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setPassword(event.nativeEvent.text);
    };

    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword


    }
}