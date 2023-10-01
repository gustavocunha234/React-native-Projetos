import { Image, Text, View } from "react-native";
import { AnimalImage, CategoryFilterBox, CategoryFilterIconBox, CategoryFilterTitle, ContainerHome, Header, ListAnimalDescriptionBox, ListAnimalDescriptionInfo, ListAnimalMainBox, ListAnimalTitle, ListAnimalView, MainTitle } from "./Styles/home.style";



const Home = () => {

  return (
    <View>
      <ContainerHome>
        <Image source={require("../../assets/images/MainDog.png")} width={60} height={60} />
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

          <CategoryFilterBox>
            <CategoryFilterIconBox>
              <Image source={require("../../assets/images/bird.png")} />
            </CategoryFilterIconBox>
            <CategoryFilterTitle>Passaro</CategoryFilterTitle>
          </CategoryFilterBox>

          <CategoryFilterBox>
            <CategoryFilterIconBox>
              <Image source={require("../../assets/images/hamster.png")} />
            </CategoryFilterIconBox>
            <CategoryFilterTitle>Hasmter</CategoryFilterTitle>
          </CategoryFilterBox>

          <CategoryFilterBox>
            <CategoryFilterIconBox>
              <Image source={require("../../assets/images/Bunny.png")} />
            </CategoryFilterIconBox>
            <CategoryFilterTitle>Coelho</CategoryFilterTitle>
          </CategoryFilterBox>

        </Header>
        <MainTitle>🐱Me Adota🐶</MainTitle>

        <ListAnimalView>

          <ListAnimalMainBox>
            <AnimalImage source={require("../../assets/images/Pug.png")} />
            <ListAnimalDescriptionInfo>
              <ListAnimalTitle>Thor</ListAnimalTitle>
              <ListAnimalDescriptionBox>
                <Text style={{ color: "#fff", fontSize: 16 }}>Cachorro | Filhote | Macho</Text>
              </ListAnimalDescriptionBox>
            </ListAnimalDescriptionInfo>
          </ListAnimalMainBox>

          <ListAnimalMainBox>
            <AnimalImage source={require("../../assets/images/BigCat.png")} />
            <ListAnimalDescriptionInfo>
              <ListAnimalTitle>Loki</ListAnimalTitle>
              <ListAnimalDescriptionBox>
                <Text style={{ color: "#fff", fontSize: 16 }}>Gato | Adulto | Macho</Text>
              </ListAnimalDescriptionBox>
            </ListAnimalDescriptionInfo>
          </ListAnimalMainBox>

          <ListAnimalMainBox>
            <AnimalImage source={require("../../assets/images/BigBunny.png")} />
            <ListAnimalDescriptionInfo>
              <ListAnimalTitle>Thor</ListAnimalTitle>
              <ListAnimalDescriptionBox>
                <Text style={{ color: "#fff", fontSize: 16 }}>Coelho | Filhote | Macho</Text>
              </ListAnimalDescriptionBox>
            </ListAnimalDescriptionInfo>
          </ListAnimalMainBox>

        </ListAnimalView>
      </ContainerHome>
    </View>
  );
};

export default Home;