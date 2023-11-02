import { useRef, useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker"
import Button from "../../../shared/components/button/Button"
import Input from "../../../shared/components/input/input"
import { useCreatePet } from "../hooks/useCreatePet"
import { CreatePetContainer } from "../styles/createPet.style"

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

const CreatePet = () => {
  const { createPet, disabled, loading, handleOnChangeInput, handleCreatePet } = useCreatePet();

  const [image, setImage] = useState<ImagePickerAssets>()

  const nameInput = useRef<TextInput>(null);
  const speciesInput = useRef<TextInput>(null);
  const genderInput = useRef<TextInput>(null);
  const raceInput = useRef<TextInput>(null);
  const addressInput = useRef<TextInput>(null);
  const reasonInput = useRef<TextInput>(null);

  function imagePickerCallBack(data: ImagePickerResponse) {
    if (data.didCancel) {
      return
    }

    if (data.errorCode) {
      console.log(data.errorMessage)
      return
    }

    if (!data.assets || data.assets.length === 0) {
      return
    }
    console.log("log da uri na hora de selecionar", data.assets[0].uri)
    setImage(data.assets[0]);
  }

  const handlePetSubmission = async () => {
    await handleCreatePet(image);
  };


  return (
    <CreatePetContainer>
      <Input value={createPet.name} onChange={(event) => handleOnChangeInput(event, 'name')} margin='0px 0px 16px 0px' placeholder="Digite" title="Nome: " ref={nameInput} onSubmitEditing={() => nameInput?.current?.focus()} />
      <Input value={createPet.species} onChange={(event) => handleOnChangeInput(event, 'species')} margin='0px 0px 16px 0px' placeholder="Digite" title="Especie: " onSubmitEditing={() => speciesInput?.current?.focus()} />
      <Input value={createPet.gender} onChange={(event) => handleOnChangeInput(event, 'gender')} margin='0px 0px 16px 0px' placeholder="Digite" title="Genero: " ref={genderInput} onSubmitEditing={() => genderInput?.current?.focus()} />
      <Input value={createPet.race} onChange={(event) => handleOnChangeInput(event, 'race')} margin='0px 0px 16px 0px' placeholder="Digite" title="Raça: " ref={raceInput} onSubmitEditing={() => raceInput?.current?.focus()} />
      <Input value={createPet.address} onChange={(event) => handleOnChangeInput(event, 'address')} margin='0px 0px 16px 0px' placeholder="Digite" title="Endereço: " ref={addressInput} onSubmitEditing={() => addressInput?.current?.focus()} />
      <Input value={createPet.reason} onChange={(event) => handleOnChangeInput(event, 'reason')} margin='0px 0px 16px 0px' placeholder="Digite" title="Motivo: " ref={reasonInput} onSubmitEditing={() => reasonInput?.current?.focus()} />

      <Image style={styles.avatar} source={{ uri: image ? image.uri : "https://www.nomnomnow.com/images/placeholder_photo_cat.png" }} />

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity style={styles.button} onPress={() => launchImageLibrary({ mediaType: "photo" }, imagePickerCallBack)}>
          <Text style={styles.buttonText}>Escolher imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => launchCamera({ mediaType: "photo" }, imagePickerCallBack)}>
          <Text style={styles.buttonText}>Tirar foto</Text>
        </TouchableOpacity>
      </View>


      <Button disabled={disabled} onPress={handlePetSubmission} loading={loading} margin='0px 0px 32px 0px' title="Cadastrar pet" />
    </CreatePetContainer>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12
  },
  buttonText: {
    color: "#fff"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  }
})

export default CreatePet