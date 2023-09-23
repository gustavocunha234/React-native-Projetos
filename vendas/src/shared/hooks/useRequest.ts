import { useState } from "react";
import { ConnectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { RequestLogin } from "../types/requestLogin";

import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";

export const useRequest = () => {
    const {setUser} = useUserReducer();
    const {setModal} = useGlobalReducer();
    const [loading, setloading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setloading(true);

        await ConnectionAPIPost<ReturnLogin>('http://10.0.0.130:8080/auth', body)
        .then((result) => {
         setUser(result.user);
        })
       .catch(() => {
        setModal({
            visible:true,
            title: 'Erro',
            text: 'Usuário ou senha inválidos',
        });
       });

        setloading(false);

    };

    return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage,
    };     

};