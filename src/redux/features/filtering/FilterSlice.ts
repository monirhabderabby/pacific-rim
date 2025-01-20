import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  priceRange: number[];
  flowers: string[]; // Selected flower types
  categories: string[]; // Selected categories
}

const initialState: FilterState = {
  priceRange: [0, 1000],
  flowers: [],
  categories: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange(state, action: PayloadAction<number[]>) {
      state.priceRange = action.payload;
    },
    toggleFlower(state, action: PayloadAction<string>) {
      const flower = action.payload;
      if (state.flowers.includes(flower)) {
        state.flowers = state.flowers.filter((item) => item !== flower);
      } else {
        state.flowers.push(flower);
      }
    },
    toggleCategory(state, action: PayloadAction<string>) {
      const category = action.payload;
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((item) => item !== category);
      } else {
        state.categories.push(category);
      }
    },
  },
});

export const { setPriceRange, toggleFlower, toggleCategory } = filterSlice.actions;
export default filterSlice.reducer;
