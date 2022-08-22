import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PaymentStateType, PaymentType } from "../types/Payment"

const initialState: PaymentStateType = {
	payments: [],
	selectedPaymentId: null,
}

export interface EditPaymentType {
	name: string
	amount: number
}

const paymentSlice = createSlice({
	name: "payments",
	initialState,
	reducers: {
		addPayment: {
			reducer: (state, action: PayloadAction<PaymentType>) => {
				const newPayments: PaymentType[] = [...state.payments, action.payload]
				state.payments = newPayments
			},
			prepare: (name: string, amount: number) => ({
				payload: {
					id: Math.floor(Math.random() * 1e4),
					name,
					amount,
					date: new Date(Date.now()),
				},
			}),
		},
		deletePayment: {
			reducer: (state, action: PayloadAction<number>) => {
				const newPayments: PaymentType[] = state.payments.filter(
					(payment: PaymentType) => payment.id !== action.payload
				)
				state.payments = newPayments
			},
			prepare: (id: number) => ({
				payload: id,
			}),
		},
		selectPayment: {
			reducer: (state, action: PayloadAction<number | null>) => {
				state.selectedPaymentId = action.payload
			},
			prepare: (id: number | null) => ({
				payload: id,
			}),
		},
		editPayment: {
			reducer: (state, action: PayloadAction<EditPaymentType>) => {
				const newPayments: PaymentType[] = state.payments.map((payment: PaymentType) =>
					payment.id === state.selectedPaymentId ? { ...payment, ...action.payload } : payment
				)
				state.payments = newPayments
				state.selectedPaymentId = null
			},
			prepare: (name: string, amount: number) => ({
				payload: {
					name,
					amount,
				},
			}),
		},
	},
})

export const { addPayment, deletePayment, editPayment, selectPayment } = paymentSlice.actions
export default paymentSlice.reducer

