import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, TouchableOpacity, View } from "react-native";

import AnimalsThumbail from "../../../shared/components/animalsThumbnail/AnimalsThumbnail";
import { DisplayFlexColumn } from "../../../shared/components/globalStyles/globalView.style";
import Input from "../../../shared/components/input/input";
import { URL_PETS } from "../../../shared/constants/urls";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { MethodEnum } from "../../../shared/enums/method.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { AnimalType } from "../../../shared/types/AnimalType";
import { useAnimalReducer } from "../../../store/reducers/animalReducer/useAnimalReducer";
import { SearchAnimalNavigationProp } from '../../searchAnimal/screen/SearchAnimal';
import { HomeContainer } from "../Styles/home.style";



const Home = () => {
  const [search, setSearch] = useState('');
  const { navigate } = useNavigation<SearchAnimalNavigationProp>();
  const { request } = useRequest();
  const { animals, setAnimals } = useAnimalReducer();

  const [numColumns, setNumColumns] = useState(2);

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
        <Input onPressIconRight={handleGoToAnimal}
          value={search}
          onChange={handleOnChangeSearch}
          iconRight="search"
        />
        <Text style={styles.mainTitle}>🐱Me Adota🐶</Text>
        <TouchableOpacity style={{ display: "none" }} onPress={() => setNumColumns(numColumns === 2 ? 1 : 2)}><Text></Text></TouchableOpacity>
      </HomeContainer>
      <DisplayFlexColumn />
      <FlatList
        style={{ height: '83%' }}
        contentContainerStyle={styles.listContainer}
        data={animals}
        numColumns={2} // Set the number of columns to 2
        key={numColumns.toString()} // Change the key to force a fresh render
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <AnimalsThumbail animal={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 20
  }
});

export default Home;