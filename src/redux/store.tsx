import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import authSlice from './features/authslice'

export const store = configureStore({
  reducer:{
    authSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
