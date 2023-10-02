import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { URL_USER } from "../../../shared/constants/urls";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { MethodEnum } from "../../../shared/enums/method.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { CreatePetType } from "../../../shared/types/createPetType";


export const useCreateUser = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading } = useRequest();
    const [disabled, setDisabled] = useState<boolean>(true)
    const [createPet, setCreatePet] = useState<CreatePetType>({
        species: '',
        gender: '',
        race: '',
        address: '',
        reason: '',

    });

    useEffect(() => {
        if (createPet.species !== '' &&
            createPet.gender !== '' &&
            createPet.race !== '' &&
            createPet.address !== '' &&
            createPet.reason !== ''
        ) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }, [createPet])

    const handleCreatePet = async () => {
        const resultCreatePet = await request({
            url: URL_USER,
            method: MethodEnum.POST,
            body: {
                ...createPet,
            },
            message: 'Usuário cadastrado com sucesso!'
        })

        if (resultCreatePet) {
            reset({
                index: 0,
                routes: [{ name: MenuUrl.LOGIN }],
            })
        }
    }

    const handleOnChangeInput = (
        event: NativeSyntheticEvent<TextInputChangeEventData>,
        name: string,
    ) => {
        setCreatePet((currentCreatePet) => ({
            ...currentCreatePet,
            [name]: event.nativeEvent.text,
        }));
    };

    return {
        createPet,
        loading,
        disabled,
        handleOnChangeInput,
        handleCreatePet,
    };
};