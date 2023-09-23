import { useState } from "react";
import { ConnectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { RequestLogin } from "../types/requestLogin";
import { UserType } from "../types/userType";

export const useRequest = () => {
    const [loading, setloading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [user, setUser] = useState<UserType>();

    const authRequest = async (body: RequestLogin) => {
        setloading(true);

        await ConnectionAPIPost<ReturnLogin>('http://10.0.0.130:8080/auth', body)
        .then((result) => {
            setUser(result.user);
        })
       .catch(() => {
        setErrorMessage('Usuario ou senha inválidos');
       });



        setloading(false);

    };

    return {
        loading,
        user,
        errorMessage,
        authRequest,
        setErrorMessage,
    };     

};