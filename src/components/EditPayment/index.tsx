import React, { FormEvent, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { editPayment, selectPayment } from "../../app/paymentSlice"
import { AppDispatch } from "../../app/store"
import { useSelectedPayment } from "../../hooks/paymentHooks"

type Props = {}

interface Field {
	name: string
	amount: string
}

const EditPayment = (props: Props) => {
	const selectedPayment = useSelectedPayment()

	const dispatch = useDispatch<AppDispatch>()

	const [fields, setFields] = useState<Field>({
		name: selectedPayment?.name || "",
		amount: String(selectedPayment?.amount) || "",
	})

	const changeFieldHandler = (prop: string) => (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault()
		setFields({ ...fields, [prop]: event.currentTarget.value })
	}

	const editPaymentHandler = (event: MouseEvent): void => {
		if (!fields.name || !fields.amount) return
		dispatch(editPayment(fields.name, parseFloat(fields.amount)))
		setFields({
			name: "",
			amount: "",
		})
	}

	const deSelectPaymentHandler = (event: MouseEvent): void => {
		dispatch(selectPayment(null))
		setFields({
			name: "",
			amount: "",
		})
	}

	return (
		<div>
			<h4>Edit Payment</h4>
			<input type="text" placeholder="Payment Name" value={fields.name} onChange={changeFieldHandler("name")} />
			<input
				type="number"
				step={0.01}
				placeholder="Payment Amount"
				value={fields.amount}
				onChange={changeFieldHandler("amount")}
			/>
			<button type="button" onClick={editPaymentHandler}>
				Save
			</button>
			<button type="button" onClick={deSelectPaymentHandler}>
				Cancel
			</button>
		</div>
	)
}

export default EditPayment

