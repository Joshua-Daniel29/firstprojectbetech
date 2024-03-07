import ApiAuth from "@/api/ApiAuth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (credentials: any) => {
    const request = await ApiAuth.post("/login", credentials);
    const response = await request.data;
    console.log('login-response', response);
    return response;
  }
)
const authSlice = createSlice({
  name:'users',
  initialState:{
    token_type: "",
    access_token: "",
    session_age: 0
  },
  reducers: {},
  extraReducers: (builder)=>{
    builder
    .addCase(loginUser.fulfilled, (state, action)=>{
      state.access_token = action.payload
      state.session_age = action.payload
      state.token_type = action.payload

    })
  }

})

export default authSlice.reducer;









