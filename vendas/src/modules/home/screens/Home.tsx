import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FlatList, View } from "react-native";
import AnimalsThumbail from "../../../shared/components/animalsThumbnail/AnimalsThumbnail";
import Text from "../../../shared/components/text/Text";
import { URL_PETS } from "../../../shared/constants/urls";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { MethodEnum } from "../../../shared/enums/method.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { AnimalType } from "../../../shared/types/AnimalType";
import { useAnimalReducer } from "../../../store/reducers/animalReducer/useAnimalReducer";



const Home = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { animals, setAnimals } = useAnimalReducer();

  useEffect(() => {
    request<AnimalType[]>({
      url: URL_PETS,
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
      <Text>Home</Text>
      <FlatList
        data={animals}
        renderItem={({ item }) => <AnimalsThumbail animal={item} />}
      />
    </View>
  );
};

export default Home;