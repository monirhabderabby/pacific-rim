import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
const initialState = {
  type: "",
  experience: '',
  profession: "",
  email: "",
  fullName: "",
  password: "",
  confirmPassword: "",
  businesses: [
    {
      country: "",
      state: "",
      business_license: "",
      reseller_business_license: "",
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
  },
});

// Export actions for use in components
export const { setRegistrationValue } = authSlice.actions;

// Export the reducer to configure the store
export default authSlice.reducer;
