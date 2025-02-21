import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadTvDetail: (state, action) => {
      state.info = action.payload;
    },
    removeTvDetail: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadTvDetail, removeTvDetail } = tvSlice.actions;

export default tvSlice.reducer;
