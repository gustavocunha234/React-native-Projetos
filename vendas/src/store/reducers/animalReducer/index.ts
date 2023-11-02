import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AnimalType } from '../../../shared/types/AnimalType';



interface AnimalStore{
    animals: AnimalType[];
}

const initialState: AnimalStore = {
  animals: [],
};



export const animalSlide = createSlice({
  name: 'animalReducer',
  initialState,
  reducers: {
    setAnimalsAction: (state, action: PayloadAction<AnimalType[]>) => {
      state.animals = action.payload;
    },
  },
});


export const { setAnimalsAction } = animalSlide.actions

export default animalSlide.reducer;