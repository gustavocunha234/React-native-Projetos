import { useRef } from "react"
import { TextInput } from "react-native"
import Button from "../../../shared/components/button/Button"
import Input from "../../../shared/components/input/input"
import { useCreateUser } from "../hooks/useCreatePet"
import { CreatePetContainer } from "../styles/createPet.style"


const CreatePet = () => {
  const { createPet, disabled, loading, handleOnChangeInput, handleCreatePet } = useCreateUser();

  const speciesInput = useRef<TextInput>(null);
  const genderInput = useRef<TextInput>(null);
  const raceInput = useRef<TextInput>(null);
  const addressInput = useRef<TextInput>(null);
  const reasonInput = useRef<TextInput>(null);



  return (
    <CreatePetContainer>
      <Input value={createPet.species} onChange={(event) => handleOnChangeInput(event, 'species')} margin='0px 0px 16px 0px' placeholder="Digite" title="Especie: " onSubmitEditing={() => speciesInput?.current?.focus()} />
      <Input value={createPet.gender} onChange={(event) => handleOnChangeInput(event, 'gender')} margin='0px 0px 16px 0px' placeholder="Digite" title="Genero: " ref={genderInput} onSubmitEditing={() => genderInput?.current?.focus()} keyboardType="number-pad" />
      <Input value={createPet.race} onChange={(event) => handleOnChangeInput(event, 'race')} margin='0px 0px 16px 0px' placeholder="Digite" title="Raça: " ref={raceInput} onSubmitEditing={() => raceInput?.current?.focus()} keyboardType="email-address" />
      <Input value={createPet.address} onChange={(event) => handleOnChangeInput(event, 'address')} margin='0px 0px 16px 0px' placeholder="Digite" title="Endereço: " ref={addressInput} onSubmitEditing={() => addressInput?.current?.focus()} keyboardType="number-pad" />
      <Input value={createPet.reason} onChange={(event) => handleOnChangeInput(event, 'reason')} margin='0px 0px 16px 0px' placeholder="Digite" title="Motivo: " ref={reasonInput} onSubmitEditing={() => reasonInput?.current?.focus()} keyboardType="number-pad" />

      <Button disabled={disabled} onPress={() => null} loading={loading} margin='0px 0px 32px 0px' title="Cadastrar pet" />
    </CreatePetContainer>
  )
}

export default CreatePet