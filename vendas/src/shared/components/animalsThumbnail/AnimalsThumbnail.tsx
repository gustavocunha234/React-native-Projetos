import { AnimalType } from "../../types/AnimalType";
import { AnimalsThumbnailContainer } from "./animalsThumbnail.style"

interface AnimalThumbailProps {
    animal: AnimalType;
}



const AnimalsThumbail = ({animal}: AnimalThumbailProps) => {

return <AnimalsThumbnailContainer />

}

export default AnimalsThumbail;