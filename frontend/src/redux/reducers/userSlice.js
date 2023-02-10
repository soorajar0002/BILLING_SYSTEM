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
   
    vendorData: (state, action) => {
      const user = {
        id: action.payload.id,
        username:action.payload.username,
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        phone_number: action.payload.phone_number,
        
        isVendor: true,
      };
      console.log("sc",user)

      return {
        ...state,user,
      };
  }
},
});

// this is for dispatch
export const { setToken,vendorData } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;