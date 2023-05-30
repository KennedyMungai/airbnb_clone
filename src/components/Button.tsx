import { MouseEvent } from 'react'
import { IconType } from 'react-icons'

type Props = {
	label: string
	onClick: (e: MouseEvent<HTMLButtonElement>) => void
	disabled?: boolean
	outline?: boolean
	small?: boolean
	icon?: IconType
}

const Button = ({ label, onClick, disabled, outline, small, icon }: Props) => {
	return <button>{label}</button>
}

export default Button
