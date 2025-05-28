import './globals.css'
import { Poppins, Playfair_Display } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Bloom Euphoria | Exquisite Floral Arrangements',
  description: 'Discover a magical garden of exquisite floral arrangements with Bloom Euphoria. Modern, unique bouquets for every occasion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
