import authReducer from "@/redux/features/authentication/AuthSlice";
import filterReducer from "@/redux/features/filtering/FilterSlice"; // Adjust the path as necessary

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth reducer
    filters: filterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
