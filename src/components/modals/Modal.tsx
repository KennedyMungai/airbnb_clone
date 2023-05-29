import { ReactElement } from 'react'

type Props = {
	isOpen?: boolean
	onClose: () => void
	onSubmit: () => void
	title?: string
	body?: ReactElement
	footer?: ReactElement
	actionLabel: string
	disabled?: boolean
	secondaryAction?: () => void
	secondaryLabel?: string
}

const Modal = (props: Props) => {
	return <div>Modal</div>
}

export default Modal
