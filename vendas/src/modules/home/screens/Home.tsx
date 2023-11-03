import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList,View, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import AnimalsThumbail from "../../../shared/components/animalsThumbnail/AnimalsThumbnail";
import { URL_PETS } from "../../../shared/constants/urls";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { MethodEnum } from "../../../shared/enums/method.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { AnimalType } from "../../../shared/types/AnimalType";
import { useAnimalReducer } from "../../../store/reducers/animalReducer/useAnimalReducer";
import Input from "../../../shared/components/input/input";
import { SearchAnimalNavigationProp } from '../../searchAnimal/screen/SearchAnimal';
import { DisplayFlexColumn } from "../../../shared/components/globalStyles/globalView.style";
import { HomeContainer } from "../Styles/home.style";



const Home = () => {
  const [search, setSearch] = useState('');
  const { navigate } = useNavigation<SearchAnimalNavigationProp>();
  const { request } = useRequest();
  const { animals, setAnimals } = useAnimalReducer();

  useEffect(() => {
    request<AnimalType[]>({
      url: URL_PETS,
      method: MethodEnum.GET,
      saveGlobal: setAnimals
    })
  }, []);

  const handleGoToAnimal = () => {

    navigate(MenuUrl.SEARCH_ANIMAL, {
      search,
    });

  };

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(event.nativeEvent.text);
  };

  return (
    <View>
      <HomeContainer>
      <Input  onPressIconRight={handleGoToAnimal}
          value={search}
          onChange={handleOnChangeSearch}
          iconRight="search" />
      </HomeContainer>
      <DisplayFlexColumn />
      <FlatList
        data={animals}
        renderItem={({ item }) => <AnimalsThumbail animal={item} />}
      />
    </View>
  );
};

export default Home;