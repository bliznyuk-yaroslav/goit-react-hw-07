import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterContacts: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const selectVisibleContacts = (state) => state.filter.name;
export const filterReducer = filterSlice.reducer;
