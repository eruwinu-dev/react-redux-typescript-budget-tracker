export interface PaymentType {
	id: number
	name: string
	amount: number
	date: Date
}

export interface PaymentStateType {
	payments: PaymentType[]
	selectedPaymentId: number | null
}

