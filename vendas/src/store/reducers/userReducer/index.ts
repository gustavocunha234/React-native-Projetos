import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserType } from '../../../shared/types/userType';



interface UserStore{
    user?: UserType;
}

const initialState: UserStore = {
    user: undefined,
};



export const userSlide = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});


export const { setUserAction } = userSlide.actions

export default userSlide.reducer;