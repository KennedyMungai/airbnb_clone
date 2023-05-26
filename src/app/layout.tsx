import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'AirBnB Clone',
	description: 'A clone of the AirBnB site'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
