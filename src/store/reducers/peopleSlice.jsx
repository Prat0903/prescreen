import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadPersonDetail: (state, action) => {
      state.info = action.payload;
    },
    removePersonDetail: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadPersonDetail, removePersonDetail } = peopleSlice.actions;

export default peopleSlice.reducer;
