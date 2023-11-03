import { useDispatch } from 'react-redux';

import { PaginationType } from '../../../shared/types/paginationType';
import { AnimalType } from '../../../shared/types/AnimalType';
import { useAppSelector } from '../../hooks';
import { setAnimalsAction, setSearchAnimalsAction } from '.';

export const useAnimalReducer = () => {
  const dispatch = useDispatch();
  const { animals, searchAnimals } = useAppSelector((state) => state.animalReducer);

  const setAnimals = (currentAnimals: AnimalType[]) => {
    dispatch(setAnimalsAction(currentAnimals));
  };

  const setSearchAnimals = (currentAnimals?: PaginationType<AnimalType[]>) => {
    dispatch(setSearchAnimalsAction(currentAnimals));
  };

  const insertSearchAnimals = (currentAnimals: PaginationType<AnimalType[]>) => {
    dispatch(
        setSearchAnimalsAction({
        ...currentAnimals,
        data: [...(searchAnimals?.data || []), ...currentAnimals.data],
      }),
    );
  };

  return {
    animals,
    searchAnimals,
    setAnimals,
    setSearchAnimals,
    insertSearchAnimals,
  };
};