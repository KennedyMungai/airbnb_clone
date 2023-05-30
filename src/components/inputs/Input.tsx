'use client'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
	id: string
	label: string
	type?: string
	disabled?: boolean
	formatPrice?: boolean
	required?: boolean
	register: UseFormRegister<FieldValues>
	errors: FieldErrors
}

const Input = ({
	id,
	label,
	type,
	disabled,
	formatPrice,
	required,
	register,
	errors
}: Props) => {
	return <div>Input</div>
}

export default Input
