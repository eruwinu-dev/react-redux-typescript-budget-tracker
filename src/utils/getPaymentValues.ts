import { PaymentType } from "../types/Payment"

export const getBalance = (payments: PaymentType[]): number => {
	const balance = payments.reduce((acc: number, payment: PaymentType) => acc + payment.amount, 0)

	return balance
}

