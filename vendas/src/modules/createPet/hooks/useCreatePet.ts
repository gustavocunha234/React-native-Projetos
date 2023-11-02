import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { URL_PET } from "../../../shared/constants/urls";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { CreatePetType } from "../../../shared/types/createPetType";
import { useGlobalReducer } from "../../../store/reducers/globalReducer/useGlobalReducer";



interface ImagePickerAssets {
    base64?: string;
    uri?: string;
    width?: number;
    height?: number;
    originalPath?: string;
    fileSize?: number;
    type?: string;
    fileName?: string;
    duration?: number;
    bitrate?: number;
    timestamp?: string;
    id?: string;
}

export const useCreatePet = () => {

    const { setModal } = useGlobalReducer();


    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading } = useRequest();
    const [disabled, setDisabled] = useState<boolean>(true)
    const [createPet, setCreatePet] = useState<CreatePetType>({
        species: '',
        gender: '',
        race: '',
        address: '',
        reason: '',
        name: "",
        image: ""

    });

    useEffect(() => {
        if (createPet.species !== '' &&
            createPet.gender !== '' &&
            createPet.race !== '' &&
            createPet.address !== '' &&
            createPet.reason !== '' &&
            createPet.name !== ""
        ) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }, [createPet])

    const handleCreatePet = async (image?: ImagePickerAssets) => {

        const formData = new FormData();
        formData.append('species', createPet.species);
        formData.append('gender', createPet.gender);
        formData.append('race', createPet.race);
        formData.append('address', createPet.address);
        formData.append('reason', createPet.reason);
        formData.append('name', createPet.name);


        if (image) {
            // Adicione a imagem selecionada ao FormData
            formData.append('image', {
                uri: image.uri,
                type: image.type,
                name: image.fileName,
            });
        }

        try {
            const response = await fetch(URL_PET, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                // Lide com a resposta do servidor aqui

                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.HOME }],
                })

            } else {
                setModal({
                    visible: true,
                    title: 'Erro',
                    text: "Erro ao cadastrar animal",
                });
                console.error('Erro no envio da imagem');
                return undefined;
            }
        } catch (error) {
            setModal({
                visible: true,
                title: 'Erro',
                text: "Erro ao cadastrar animal",
            });
            // Lidar com erros de rede ou outros erros
            console.error('Erro na solicitação: ', error);
        }

        // console.log("Formdata: ", formData)

        // const resultCreatePet = await request({
        //     url: URL_PET,
        //     method: MethodEnum.POST,
        //     body: formData,
        //     message: 'Pet cadastrado com sucesso!'
        // })

        // console.log("ResultCreatePet: ", resultCreatePet)


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