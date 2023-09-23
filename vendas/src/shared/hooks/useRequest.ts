import { useState } from "react";
import { ConnectionAPIPost } from "../functions/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { RequestLogin } from "../types/requestLogin";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducer";

export const useRequest = () => {
    const dispatch = useDispatch();
    const [loading, setloading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setloading(true);

        await ConnectionAPIPost<ReturnLogin>('http://10.0.0.130:8080/auth', body)
        .then((result) => {
            dispatch(setUserAction(result.user))
        })
       .catch(() => {
        setErrorMessage('Usuario ou senha inválidos');
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