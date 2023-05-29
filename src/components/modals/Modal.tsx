'use client'
import { ReactElement, useEffect, useState } from 'react'

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

const Modal = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryLabel
}: Props) => {
	const [showModal, setShowModal] = useState(isOpen)

	useEffect(() => {
		setShowModal(isOpen)
	}, [isOpen])

	return <div>Modal</div>
}

export default Modal
