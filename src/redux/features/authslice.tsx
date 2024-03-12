import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiAuth from "@/api/ApiAuth";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response = await ApiAuth.post("/login", credentials);
      console.log("res", response.data);
      return response.data;
    } catch (error:any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);



const authSlice = createSlice({
  name: "auth",
  initialState: {
    token_type: "",
    access_token: "",
    expire: "",
    error: null,
  } as any,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        const { token_type, access_token, expire } = action.payload;
        state.token_type = token_type;
        state.access_token = access_token;
        state.expire = expire;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload; 
      });
  },
});

export default authSlice.reducer;
