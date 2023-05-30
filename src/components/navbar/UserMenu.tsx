'use client'
import useRegisterModal from '@/hooks/useRegisterHooks'
import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

type Props = {}

const UserMenu = (props: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const register = useRegisterModal()

	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={() => {}}
					className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					AirBnB your home
				</div>
				<div
					className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
					onClick={toggleOpen}
				>
					<AiOutlineMenu />
					<div className='hidden md:block'>
						<Avatar />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
					<div className='flex flex-col cursor-pointer'>
						<>
							<MenuItem label='Login' onClick={() => {}} />
							<MenuItem
								label='SignUp'
								onClick={register.onOpen}
							/>
						</>
					</div>
				</div>
			)}
		</div>
	)
}

export default UserMenu
