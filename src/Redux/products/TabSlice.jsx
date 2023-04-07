import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tab_view: true,
};

const tabSlice = createSlice({
  name: "tabview",
  initialState,
  reducers: {
    setTab_view(state, { payload }) {
      return {
        ...state,
        tab_view: payload,
      };
    },
  },
});

export const { setTab_view } = tabSlice.actions;
export const gettabView = (state) => state.tabview.tab_view;

export default tabSlice.reducer;
