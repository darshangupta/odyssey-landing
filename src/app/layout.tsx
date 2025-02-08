import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Ship Odyssey',
  description: 'Transport Any Biologic, Anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 