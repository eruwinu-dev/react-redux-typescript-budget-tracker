import React from "react"
import AddPayment from "./components/AddPayment"
import PaymentList from "./components/PaymentList"
import PaymentSummary from "./components/PaymentSummary"
import "./App.css"

type Props = {}

const App = (props: Props) => {
	return (
		<main>
			<section>
				<h2>Budget Tracker</h2>
				<AddPayment />
				<PaymentList />
				<PaymentSummary />
			</section>
		</main>
	)
}

export default App

