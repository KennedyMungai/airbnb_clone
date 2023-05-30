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
	return (
		<button
			className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full p-2
			${outline ? 'bg-white' : 'bg-rose-500'}
			${outline ? 'border-black' : 'border-rose-500'}
			${outline ? 'text-black' : 'text-white'}`}
		>
			{label}
		</button>
	)
}

export default Button
