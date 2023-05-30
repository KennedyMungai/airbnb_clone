'use client'
import axios from 'axios'
import { useCallback, useState } from 'react'
import { AiFullGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/hooks/useRegisterHooks'


type Props = {}

const RegisterModal = (props: Props) => {
    const registerModal = useRegisterModal()
	const [isLoading, setIsLoading] = useState(false)

	return <div>RegisterModal</div>
}

export default RegisterModal
