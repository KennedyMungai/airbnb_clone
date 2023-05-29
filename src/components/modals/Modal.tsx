'use client'
import { ReactElement, useCallback, useEffect, useState } from 'react'

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

	const handleClose = useCallback(() => {
		if (disabled) {
			return
		}

		setShowModal(false)

		setTimeout(() => {
			onClose()
		}, 300)
	}, [disabled, onClose])

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return
		}

		onSubmit()
	}, [disabled, onSubmit])

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return
		}

        secondaryAction()
	}, [disabled, secondaryAction])

    if (!isOpen) {
		return null
	} 
    
    return <div>Modal</div>
}

export default Modal
