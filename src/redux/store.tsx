import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import userReducer from './slices/User.slice.tsx'
import {pizzaApi} from "./services/pizzaApi.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import {reviewApi} from "./services/reviewApi.ts";


const store = configureStore({
  reducer: {
    user: userReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware).concat(reviewApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store