import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import { tabSlice } from './tab-slice';

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [tabSlice.name]: tabSlice.reducer
});