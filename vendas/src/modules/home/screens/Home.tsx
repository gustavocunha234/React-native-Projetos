import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, TouchableOpacity, View } from "react-native";

import AnimalsThumbail from "../../../shared/components/animalsThumbnail/AnimalsThumbnail";
import { DisplayFlexColumn } from "../../../shared/components/globalStyles/globalView.style";
import { URL_PETS } from "../../../shared/constants/urls";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { MethodEnum } from "../../../shared/enums/method.enum";
import { useRequest } from "../../../shared/hooks/useRequest";
import { AnimalType } from "../../../shared/types/AnimalType";
import { useAnimalReducer } from "../../../store/reducers/animalReducer/useAnimalReducer";
import { SearchAnimalNavigationProp } from '../../searchAnimal/screen/SearchAnimal';
import { HomeContainer } from "../Styles/home.style";
import Input from "../../../shared/components/input/input";
import LinearGradient from "react-native-linear-gradient";


type SearchBarComponentProps = {};

const Home: React.FunctionComponent<SearchBarComponentProps> = () => {
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

    <View style={styleslist.view}>    
      
      
      <HomeContainer>

      <View style={styleslist.container}>
     
      <View style={styleslist.boxtop}>
      <LinearGradient colors={['#21aedf' , '#1790bf' ]} style={styleslist.linearGradient}>
            <View>
            <Text style={styleslist.headerText}>Tem animal precisando {'\n'} de um lar ? {'\n'} Cadastre aqui </Text>
          <TouchableOpacity style={styleslist.button} >
          <Text style={styleslist.buttonText} >Cadastrar</Text>
          </TouchableOpacity>
            </View>
            
            <Image
              style={styleslist.headerIcon}
              source={require("../../../assets/images/c_1.png")}
              
            />
            
            <ImageBackground
              style={styleslist.headerPata}
              source={require("../../../assets/images/pata.png")}
            />
           

            </LinearGradient>
           
          </View>
          </View>
      

     
      
      <Input iconRight="search"
      onChange={handleOnChangeSearch}
      value={search}

      
    />
<Text style={styleslist.mainTitle}>Categorias</Text>

              
        <TouchableOpacity style={{ display: "none"}} onPress={() => setNumColumns(numColumns === 2 ? 1 : 3)}><Text></Text></TouchableOpacity>
      </HomeContainer>
      <DisplayFlexColumn />
      <FlatList
        style={{ height: '71%' }}
        contentContainerStyle={styleslist.listContainer}
        data={animals}
        numColumns={2} // Set the number of columns to 2
        key={numColumns.toString()} // Change the key to force a fresh render
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <AnimalsThumbail animal={item} />}
        
      />

    </View>
  );
};


const styleslist = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    
  },
  mainTitle: {
    fontSize: 20,
    color: '#000',
    textAlign: "left",
    marginTop: 10,
  },
  view: {
      margin: 5,
      

  },
  bodyContent: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuBox: {
    backgroundColor: '#ffffff',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    shadowColor: 'black',
    borderRadius: 25,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 22,
    color: '#000',
    
  },
  body: {

  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    width: '100%',
    height: 200,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
   boxtop: {
      backgroundColor: '#ffffff',
      
      width: 370,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 12,
      shadowColor: 'black',
      borderRadius: 25,
      shadowOpacity: 0.2,
      
      elevation: 3,
   },
   linearGradient:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 390,
    marginBottom: 20,
    height: 135,
    marginTop: 20,
    borderRadius: 20
   },
   headerIcon: {
    width: 130,
    height: 130,
    marginRight: 30,
    marginTop: 5,
    zIndex: 2,
    
   },
   headerText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 18,
    fontWeight: '700',
    marginTop: 10,
    zIndex: 2

   },
   button: {
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#ffa200",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 20,
   },
   buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 'bold',
   },
   headerPata: {
    width: 100,
    height: 95,
    transform: [{ rotateX: '180deg' }],
    right: 215,
    zIndex: 1
   },
});

export default Home;