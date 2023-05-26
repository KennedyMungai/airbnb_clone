import React from 'react'
import Container from '../Container'

type Props = {}

const NavBar = (props: Props) => {
	return (
		<div className='fixed w-full bg-white z-10 shadow-sm'>
			<div className='py-4 border-b-[1px]'>
				<Container></Container>
			</div>
		</div>
	)
}

export default NavBar
