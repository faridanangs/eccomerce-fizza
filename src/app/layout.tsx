import Notification from '@/components/Notification'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fizzante.vercel.app'),
  title: {
    default: "Fizzante",
    template: "Fizzante | %s"
  },
  description: 'homi homi',
  verification: {
    google: "google",
    yandex: "yandex"
    
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <meta name='viewport' content="width=device-width, initial-scale=1" />
      <body className={inter.className}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
