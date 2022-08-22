import React from "react"
import { useSelector } from "react-redux"
import { usePaymentList } from "../../hooks/paymentHooks"
import { PaymentType } from "../../types/Payment"
import PaymentItem from "./PaymentItem"

type Props = {}

const PaymentList = (props: Props) => {
	const payments = usePaymentList()

	if (!payments.length) return <h4>No payments.</h4>

	return (
		<div>
			{payments.map((payment: PaymentType, index: number) => (
				<PaymentItem key={index} payment={payment} />
			))}
		</div>
	)
}

export default PaymentList

