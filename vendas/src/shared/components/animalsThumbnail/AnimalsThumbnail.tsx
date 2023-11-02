import { useNavigation } from "@react-navigation/native";
import { AnimalNavigationProp } from "../../../modules/detail/screens/detail";
import { MenuUrl } from "../../enums/MenuUrl.enum";
import { AnimalType } from "../../types/AnimalType";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";

import { AnimalImage, AnimalsThumbnailContainer } from "./animalsThumbnail.style";

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

    return (

        <AnimalsThumbnailContainer onPress={handGoToDetail}>
            {/* Quando tiver upload de imagem trocar para "uri: animal.image" */}
            <AnimalImage source={require("../../../assets/images/Pug.png")} />
            <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{animal.name}</Text>
        </AnimalsThumbnailContainer>
    );
};

export default AnimalsThumbail;