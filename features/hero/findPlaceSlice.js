import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Home", icon: "icon-home" },
    { id: 2, name: "Dashboard", icon: "icon-home" },
    { id: 3, name: "Our Experts", icon: "icon-destination" },
    { id: 4, name: "Partners & Offers", icon: "icon-ski" },
    { id: 5, name: "Participate & Rate", icon: "icon-home" },
    { id: 6, name: "Shop", icon: "icon-car" },
  ],
  currentTab: "Homex",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
