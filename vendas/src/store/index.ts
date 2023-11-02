import { configureStore } from '@reduxjs/toolkit';

import animalReducer from './reducers/animalReducer';
import userReducer from './reducers/userReducer';
import globalReducer from './reducers/globalReducer';


export const store = configureStore({
  reducer: {
    animalReducer,
    globalReducer,
    userReducer,
    
},
});

export type RootState = ReturnType<typeof store.getState>

export default store;