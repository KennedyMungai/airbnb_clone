import NavBar from '@/components/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'

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
				<NavBar />
				{children}
			</body>
		</html>
	)
}
