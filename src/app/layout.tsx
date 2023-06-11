import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Pedido de namoro 🥺</title>
        <meta name="description" content="aceitas?" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
