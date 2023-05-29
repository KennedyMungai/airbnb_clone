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

const Button = (props: Props) => {
	return <button>Sample Button Title</button>
}

export default Button
