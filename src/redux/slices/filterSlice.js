import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //You can mutate state thanks to Immer library
      // state.title = action.payload;

      // Or you can also return new state as usually
      return { ...state, title: action.payload };
    },
    resetFilter: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, resetFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
