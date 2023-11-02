import { Image, TouchableOpacity, View } from "react-native";
import { AnimalImage, CategoryFilterBox, CategoryFilterIconBox, CategoryFilterTitle, ContainerHome, Header, ListAnimalDescriptionBox, ListAnimalDescriptionInfo, ListAnimalMainBox, ListAnimalTitle, ListAnimalView, MainTitle,  } from "../Styles/home.style";
import { useAnimalReducer } from "../../../store/reducers/animalReducer/useAnimalReducer";
import { useEffect } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_ANIMAL, URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../shared/enums/method.enum";
import { AnimalType } from "../../../shared/types/AnimalType";
import Text from "../../../shared/components/text/Text";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";



const Home = () => {
const {navigate } = useNavigation<NavigationProp<ParamListBase>>();
const { request } = useRequest();
const {animals, setAnimals} = useAnimalReducer();

useEffect(() => {
  request<AnimalType[]>({
    url: URL_ANIMAL,
    method: MethodEnum.GET,
    saveGlobal: setAnimals
  })
}, []);

const handleGoToAnimal = (animal: AnimalType) => {

  navigate(MenuUrl.DETAIL), {
    animal,
  };

};

  return (
    <View>
       {animals.map((animal) => (
        <TouchableOpacity onPress={() => handleGoToAnimal(animal)}>
        <Text>{animal.imagem}</Text>   
        </TouchableOpacity>
        ))}
    </View>
  );
};

export default Home;