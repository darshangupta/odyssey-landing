import Image from 'next/image'
import React from 'react'
export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full border-t border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <p className="text-sm">© 2025 Ship Odyssey, Inc.</p>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <div className="w-6 h-6">
            <Image
              src="/images/vercel.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </div>
        </a>
      </div>
    </footer>
  )
} 