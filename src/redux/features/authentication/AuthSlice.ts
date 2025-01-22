import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
interface Business {
  country: string;
  province?: string;
  businessLicense: string;
  resellerLicense: string;
}

const initialState: {
  type: "CBD/HEMP" | "Recreational Cannabis" | "Both" | "";
  experience: string;
  profession: string[];
  email: string;
  fullName: string;
  password: string;
  businesses: Business[];
} = {
  type: "",
  experience: "",
  profession: [],
  email: "",
  fullName: "",
  password: "",
  businesses: [
    {
      country: "",
      province: "",
      businessLicense: "",
      resellerLicense: "",
    },
  ],
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegistrationValue: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addNewBusiness: (state, action) => {
      state.businesses = action.payload;
    },
    updateBusiness: (state, action) => {
      if (state.businesses.length > 0) {
        // Find the index of the last business
        const lastIndex = state.businesses.length - 1;
        // Update the last business in the array
        state.businesses[lastIndex] = {
          ...state.businesses[lastIndex],
          ...action.payload,
        };
      }
    },
  },
});

// Export actions for use in components
export const { setRegistrationValue, addNewBusiness, updateBusiness } =
  authSlice.actions;

// Export the reducer to configure the store
export default authSlice.reducer;
