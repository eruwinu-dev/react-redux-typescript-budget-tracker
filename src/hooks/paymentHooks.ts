import { useSelector } from "react-redux"
import { store } from "../app/store"
import { PaymentType } from "../types/Payment"

type RootState = ReturnType<typeof store.getState>

export const usePaymentList = () => useSelector((state: RootState) => state.payments)
export const useSelectedPayment = () =>
	useSelector((state: RootState) =>
		state.payments.find((payment: PaymentType) => payment.id === state.selectedPaymentId)
	)

