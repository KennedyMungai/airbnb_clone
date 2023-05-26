import './globals.css'
import { Nunito } from 'next/font/google'

export const metadata = {
	title: 'AirBnB Clone',
	description: 'A clone of the AirBnB site'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
