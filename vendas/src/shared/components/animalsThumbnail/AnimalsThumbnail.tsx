import { useNavigation } from "@react-navigation/native";
import { AnimalNavigationProp } from "../../../modules/detail/screens/detail";
import { MenuUrl } from "../../enums/MenuUrl.enum";
import { AnimalType } from "../../types/AnimalType";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { StyleSheet, View } from "react-native";


import { AnimalImage, AnimalsThumbnailContainer} from "./animalsThumbnail.style";
import { Image } from "react-native";

interface AnimalThumbailProps {
    animal: AnimalType;
}

const AnimalsThumbail = ({ animal }: AnimalThumbailProps) => {
    const { navigate } = useNavigation<AnimalNavigationProp>();

    const handGoToDetail = () => {
        navigate(MenuUrl.DETAIL, {
            animal,
        });
    };

    const modifiedImageUrl = animal.image && animal.image.replace("localhost", "10.0.2.2");
    return (
        
        <AnimalsThumbnailContainer onPress={handGoToDetail}>
            {animal.image && modifiedImageUrl.startsWith('http') ? (
                  
                <AnimalImage source={{ uri: modifiedImageUrl }} />
            ) : (
                <AnimalImage source={require("../../../assets/images/Pug.png")} />
            )}
        <View style={stylesText.titleBox}>
        <Text style={stylesText.stylename} type={textTypes.PARAGRAPH_SEMI_BOLD}>{animal.name}</Text>
        <Image style={{width: 15, height: 15}} source={animal.gender === 'macho' ? require("../../../assets/images/macho.png") : require("../../../assets/images/femea.png") }/>
        </View>
        <Text style={stylesText.styleadress} type={textTypes.PARAGRAPH_SEMI_BOLD}>{animal.address}</Text>



        </AnimalsThumbnailContainer>

    )};
    
    
    const stylesText = StyleSheet.create({
        stylegender: {
            marginTop: -20,

        },
        styleadress: {
            marginTop: -20,

        },
        stylename: {
            color: '#fff',
        },
        titleBox: {
            flexDirection: 'row',
            marginTop: -50,
            alignItems: 'center',
            gap: 10
        }


      
      });

export default AnimalsThumbail;