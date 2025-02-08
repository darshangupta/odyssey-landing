import React from 'react'
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
      <body className="w-screen min-h-screen m-0 p-0">
        {children}
      </body>
    </html>
  )
} 