import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'token',
  initialState: [],
  reducers: {
    setToken: (state, action) => {
        const token = {
         
            access_token:action.payload.access,
            refresh_token:action.payload.refresh,
        };
        console.log("store",token)
      
        // return a new data
        return {...state, token};
      },
    }
});

// this is for dispatch
export const { setToken } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;