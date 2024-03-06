// reducers/index.ts
import { combineReducers } from 'redux';
import { reducer as someReducer } from './someSlice';

const rootReducer = combineReducers({
  some: someReducer,
  // add other reducers here if needed
});

export default rootReducer;
