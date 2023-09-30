import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { CreateUserType } from "../../../shared/types/createUserType";
import { useEffect, useReducer, useState } from "react";
import { URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../shared/enums/method.enum";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

export const useCreateUser = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading} = useRequest();
    const [disabled, setDisabled] = useState<boolean>(true)
    const [createUser, setCreateUser] = useState<CreateUserType>({
        confirmPassword: '',
        cpf: '',
        email: '',
        name: '',
        password: '',
        phone: '',
        
    });

    useEffect(() => {
        if(createUser.name !== '' &&
           createUser.phone !== '' &&
           createUser.email !== '' &&
           createUser.cpf !== '' &&
           createUser.password !== '' &&
           createUser.password === createUser.confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }, [createUser])

    const handleCreateUser = async () => {
        const resultCreateUser = await request({
            url: URL_USER,
            method: MethodEnum.POST,
            body: createUser,
            message: 'Usuário cadastrado com sucesso!'
        })

        if(resultCreateUser){
            reset({
                index: 0,
                routes: [{name : MenuUrl.LOGIN}],
            })
        }
    }

    const handleOnChangeInput = (
        event: NativeSyntheticEvent<TextInputChangeEventData>,
        name: string,
    ) => {
        setCreateUser((currentCreateUser) => ({
            ...currentCreateUser,
            [name]: event.nativeEvent.text,
        }));
    };

    return {
        createUser,
        loading,
        handleOnChangeInput,
        handleCreateUser,
        disabled,

    };
};