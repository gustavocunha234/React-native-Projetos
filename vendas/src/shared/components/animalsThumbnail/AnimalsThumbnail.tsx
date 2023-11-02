import { useNavigation } from "@react-navigation/native";
import { AnimalType } from "../../types/AnimalType";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { AnimalImage, AnimalsThumbnailContainer } from "./animalsThumbnail.style";
import {AnimalNavigationProp} from "../../../modules/detail/screens/detail";
import { MenuUrl } from "../../enums/MenuUrl.enum";

interface AnimalThumbailProps {
    animal: AnimalType;
}



const AnimalsThumbail = ({animal}: AnimalThumbailProps) => {
    const { navigate } = useNavigation<AnimalNavigationProp>();

    const handGoToDetail = () => {
        navigate(MenuUrl.DETAIL,  {
            animal,
        });
    };

return (

 <AnimalsThumbnailContainer onPress={handGoToDetail}>
     <AnimalImage source={{uri: animal.imagem}} />
    <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{animal.name}</Text>
</AnimalsThumbnailContainer>
    );
};

export default AnimalsThumbail;