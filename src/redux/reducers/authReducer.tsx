// reducers/someSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SomeState {
  // define your state shape
}

const initialState: SomeState = {
  // initial state
};

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    // define your reducer functions
  },
});

export const { actions, reducer } = someSlice;
