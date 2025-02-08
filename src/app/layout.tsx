import React from 'react'

export const metadata = {
  title: 'Ship Odyssey',
  description: 'Ship Odyssey - Coming Soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className="text-4xl font-bold">
            Ship Odyssey
          </h1>
          <p className="mt-4 text-xl">
            Coming soon...
          </p>
        </div>
      </body>
    </html>
  )
} 