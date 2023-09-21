import './globals.scss'
import Head from 'next/head'
import { Didact_Gothic, Inter, Playfair_Display, Anonymous_Pro } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const playfair_display = Playfair_Display(
  {subsets: ['latin'], 
    variable: '--font-playfair-display'})

export const didact_gothic = Didact_Gothic({
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-didact-gothic',
})

export const anonymous_pro = Anonymous_Pro({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-anonymous-pro',
})

export const metadata = {
  title: 'Jessen Family Cookbook',
  description: 'A Recipe book for our little family',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${didact_gothic.variable} ${playfair_display.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
