import React, { FormEvent, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addPayment } from "../../app/paymentSlice"
import { AppDispatch } from "../../app/store"

type Props = {}

interface Field {
	name: string
	amount: string
}

const initialState: Field = {
	name: "",
	amount: "",
}

const AddPayment = (props: Props) => {
	const [fields, setFields] = useState<Field>(initialState)

	const dispatch = useDispatch<AppDispatch>()

	const changeFieldHandler = (prop: string) => (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault()
		setFields({ ...fields, [prop]: event.currentTarget.value })
	}

	const addPaymentHandler = (event: MouseEvent): void => {
		if (!fields.name || !fields.amount) return
		dispatch(addPayment(fields.name, parseFloat(fields.amount)))
		setFields(initialState)
	}

	return (
		<div>
			<h4>Add Payment</h4>
			<input type="text" placeholder="Payment Name" value={fields.name} onChange={changeFieldHandler("name")} />
			<input
				type="number"
				step={0.01}
				placeholder="Payment Amount"
				value={fields.amount}
				onChange={changeFieldHandler("amount")}
			/>
			<button type="button" onClick={addPaymentHandler}>
				Add Payment
			</button>
		</div>
	)
}

export default AddPayment

