import React from "react"
import AddPayment from "./components/AddPayment"
import PaymentList from "./components/PaymentList"

type Props = {}

const App = (props: Props) => {
	return (
		<div>
			<h3>Budget Tracker</h3>
			<AddPayment />
			<PaymentList />
		</div>
	)
}

export default App

