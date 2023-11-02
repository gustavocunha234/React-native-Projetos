import { AnimalType } from "../../types/AnimalType";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { AnimalImage, AnimalsThumbnailContainer } from "./animalsThumbnail.style"

interface AnimalThumbailProps {
    animal: AnimalType;
}



const AnimalsThumbail = ({animal}: AnimalThumbailProps) => {

return (

 <AnimalsThumbnailContainer>
     <AnimalImage source={{uri: animal.imagem}} />
    <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{animal.name}</Text>
</AnimalsThumbnailContainer>
    );
};

export default AnimalsThumbail;