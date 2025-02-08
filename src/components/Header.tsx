import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-6">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <Image
              src="/images/window.svg"
              alt="Odyssey Icon"
              width={32}
              height={32}
            />
          </div>
          <span className="text-xl font-bold">Ship Odyssey</span>
        </div>
      </div>
    </header>
  )
} 