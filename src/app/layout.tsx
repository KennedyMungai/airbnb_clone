import NavBar from '@/components/navbar/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'
import Modal from '@/components/modals/Modal'
import RegisterModal from '@/components/modals/RegisterModal'

export const metadata = {
	title: 'AirBnB Clone',
	description: 'A clone of the AirBnB site'
}

const font = Nunito({
	subsets: ['latin']
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<RegisterModal />
				<NavBar />
				{children}
			</body>
		</html>
	)
}
