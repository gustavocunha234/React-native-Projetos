import { useState } from "react"
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import  { ConnectionAPIPost } from "../../../shared/functions/connection/connectionAPI";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setloading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');



    const handleOnPress = async () => {
       setloading(true);
       const resultAxios = await ConnectionAPIPost('http://10.0.0.130:8080/auth', {
        email,
        password,
       })
       .catch(() => {
        setErrorMessage('Usuario ou senha inválidos');
       });
       setloading(false);
       console.log('Logado com sucesso');
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