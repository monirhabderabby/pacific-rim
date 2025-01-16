import { createSlice } from "@reduxjs/toolkit";

// {
//   country: "",
//   state: "",
//   business_license: "",
//   reseller_business_license: "",
// },

// Define the initial state of the counter
interface Business {
  country: string;
  state: string;
  business_license: string;
  reseller_business_license: string;
}

const initialState: {
  type: string;
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
  businesses: [],
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
      state.businesses = [...state.businesses, action.payload];
    },
  },
});

// Export actions for use in components
export const { setRegistrationValue } = authSlice.actions;

// Export the reducer to configure the store
export default authSlice.reducer;
