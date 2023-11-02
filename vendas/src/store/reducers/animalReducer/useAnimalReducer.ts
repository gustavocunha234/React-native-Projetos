import { useDispatch } from "react-redux"
import { AnimalType } from "../../../shared/types/AnimalType"
import { useAppSelector } from "../../hooks"
import { setAnimalsAction } from ".";

export const useAnimalReducer = () => {
    const dispatch = useDispatch();
    const { animals } = useAppSelector((state) => state.animalReducer)

    const setAnimals = (currentAnimals: AnimalType[]) => {
        dispatch(setAnimalsAction(currentAnimals));
    };

    return {
        animals,
        setAnimals,
    };
};