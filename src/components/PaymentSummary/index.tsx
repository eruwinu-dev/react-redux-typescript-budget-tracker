import React from "react"
import { usePaymentList } from "../../hooks/paymentHooks"
import { getBalance } from "../../utils/getPaymentValues"

type Props = {}

const PaymentSummary = (props: Props) => {
	const payments = usePaymentList()
	return (
		<div className="payment-summary">
			<h5>
				Total Balance:{" "}
				{getBalance(payments).toLocaleString("en-us", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
			</h5>
		</div>
	)
}

export default PaymentSummary

