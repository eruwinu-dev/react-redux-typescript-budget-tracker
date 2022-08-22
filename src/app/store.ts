import { configureStore } from "@reduxjs/toolkit"
import paymentReducer from "./paymentSlice"

export const store = configureStore({
	reducer: paymentReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export type AppDispatch = typeof store.dispatch

