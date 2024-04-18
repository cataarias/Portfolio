// import rootSlice from "./rootSlice";
// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

// const reducer = combineReducers({
//     root: rootSlice,
// });

// const store = configureStore({
//     reducer,
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './rootSlice';

export const store = configureStore({
  reducer: {
    root: rootSlice,
  },
});

export default store;



