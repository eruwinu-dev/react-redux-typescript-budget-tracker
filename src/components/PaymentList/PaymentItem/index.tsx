import React, { MouseEvent } from "react"
import { useDispatch } from "react-redux"
import { deletePayment, selectPayment } from "../../../app/paymentSlice"
import { AppDispatch } from "../../../app/store"
import { useSelectedPayment } from "../../../hooks/paymentHooks"
import { PaymentType } from "../../../types/Payment"
import EditPayment from "../../EditPayment"

type Props = {
	payment: PaymentType
}

const PaymentItem = ({ payment }: Props) => {
	const selectedPayment = useSelectedPayment()
	const dispatch = useDispatch<AppDispatch>()

	const deletePaymentHandler = (event: MouseEvent): void => {
		dispatch(deletePayment(payment.id))
	}

	const selectPaymentHandler = (event: MouseEvent): void => {
		dispatch(selectPayment(payment.id))
	}

	if (selectedPayment?.id === payment.id) return <EditPayment />

	return (
		<div>
			<h4>{`${payment.name} - ${payment.amount}`}</h4>
			<button type="button" onClick={selectPaymentHandler}>
				Edit
			</button>
			<button type="button" onClick={deletePaymentHandler}>
				Delete
			</button>
		</div>
	)
}

export default PaymentItem

