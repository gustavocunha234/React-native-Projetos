import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { URL_PETS } from "../../shared/constants/urls";
import { MethodEnum } from "../../shared/enums/method.enum";
import { getAuthorizationToken } from "../../shared/functions/connection/auth";
import { useRequest } from "../../shared/hooks/useRequest";
import { PetsType } from "../../shared/types/petsType";
import { AnimalImage, CategoryFilterBox, CategoryFilterIconBox, CategoryFilterTitle, ContainerHome, Header, ListAnimalDescriptionBox, ListAnimalDescriptionInfo, ListAnimalMainBox, ListAnimalTitle, ListAnimalView, MainTitle } from "./Styles/home.style";



const Home = () => {

  const { request } = useRequest();
  const [pets, setPets] = useState<undefined | PetsType[]>([])

  useEffect(() => {
    const findPets = async (): Promise<undefined | PetsType[]> => {
      let returnPets;
      const token = await getAuthorizationToken();
      if (token) {
        returnPets = await request<PetsType[]>({
          url: URL_PETS,
          method: MethodEnum.GET,
        });
      }
      setPets(returnPets)
      return returnPets;
    }
    findPets();
  }, [])

  return (
    <View>
      <ContainerHome>
        <Image source={require("../../assets/images/MainDog.png")} width={30} height={30} />
        <Header>
          <CategoryFilterBox>
            <CategoryFilterIconBox isSelected>
              <Image source={require("../../assets/images/dog.png")} />
            </CategoryFilterIconBox>
            <CategoryFilterTitle>Cachorro</CategoryFilterTitle>
          </CategoryFilterBox>

          <CategoryFilterBox>
            <CategoryFilterIconBox>
              <Image source={require("../../assets/images/cat.png")} />
            </CategoryFilterIconBox>
            <CategoryFilterTitle>Gato</CategoryFilterTitle>
          </CategoryFilterBox>

        </Header>
        <MainTitle>🐱Me Adota🐶</MainTitle>

        <ListAnimalView>
          {pets?.map(pet => (
            <ListAnimalMainBox key={pet.id}>
              <AnimalImage source={require("../../assets/images/Pug.png")} />
              <ListAnimalDescriptionInfo>
                <ListAnimalTitle>{pet.species}</ListAnimalTitle>
                <ListAnimalDescriptionBox>
                  <Text style={{ color: "#fff", fontSize: 16 }}>{pet.species} | {pet.gender} | {pet.race}</Text>
                </ListAnimalDescriptionBox>
              </ListAnimalDescriptionInfo>
            </ListAnimalMainBox>
          ))}
        </ListAnimalView>
      </ContainerHome>
    </View>
  );
};

export default Home;