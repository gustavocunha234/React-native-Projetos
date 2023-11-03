import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AnimalType } from '../../../shared/types/AnimalType';
import { PaginationType } from '../../../shared/types/paginationType';



interface AnimalStore{
    animals: AnimalType[];
    searchAnimals?: PaginationType<AnimalType[]>;
}

const initialState: AnimalStore = {
  animals: [],
  searchAnimals: undefined,
};



export const animalSlide = createSlice({
  name: 'animalReducer',
  initialState,
  reducers: {
    setAnimalsAction: (state, action: PayloadAction<AnimalType[]>) => {
      state.animals = action.payload;
    },
    setSearchAnimalsAction: (
      state,
      action: PayloadAction<PaginationType<AnimalType[]> | undefined>,
    ) => {
      state.searchAnimals = action.payload;
    },
  },
});


export const { setAnimalsAction, setSearchAnimalsAction } = animalSlide.actions

export default animalSlide.reducer;