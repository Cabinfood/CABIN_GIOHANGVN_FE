import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { TABS } from '@/mocks/common'
import { setTabState } from "redux/actions/tab-action";
import { AppState } from "redux/store";

// Type for our state
export interface TabState {
  tabState: string;
}

// Initial state
const initialState: TabState = {
  tabState: TABS[0].value,
};

// Actual Slice
export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {},

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.tab,
      };
    },
    [setTabState.type]: (state, action) => {
      state.tabState = action.payload;
    },
  },
});

export const selectTabState = (state: AppState) => state.tab.tabState;