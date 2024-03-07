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









// import ApiAuth from "@/api/ApiAuth";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const loginUser = createAsyncThunk(
//   "users/loginUser",
//   async (credentials: any) => {
//     try {
//       const response = await ApiAuth.post("/login", credentials);
//       return response.data; // Return only the data from the response
//     } catch (error) {
//       throw error;
//        // Throw the error to be caught by the rejected action handler
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'users',
//   initialState: {
//     token_type: "",
//     access_token: "",
//     session_age: 0
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.fulfilled, (state, action) => {
//         // Destructure the payload to access its properties
//         const { token_type, access_token, session_age } = action.payload;
//         // Assign each property to the corresponding state property
//         state.token_type = token_type;
//         state.access_token = access_token;
//         state.session_age = session_age;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         // Handle rejected action (e.g., display error message)
//         console.error('Login failed:', action.error.message);
//       });
//   }
// });

// export default authSlice.reducer;