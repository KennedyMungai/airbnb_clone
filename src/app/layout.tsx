import RegisterModal from '@/components/modals/RegisterModal'
import NavBar from '@/components/navbar/NavBar'
import { Nunito } from 'next/font/google'
import './globals.css'

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
