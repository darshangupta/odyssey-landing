'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full">
        <div className="container mx-auto px-1 py-10 flex justify-between items-center">
          <div className="ml-[-60px]">
            <Image
              src="/images/Group 2147222271.png"
              alt="Odyssey Logo"
              width={200}
              height={200}
              className="w-[120px] h-auto"
              priority
            />
          </div>
          <div className="w-[120px]"></div> {/* Spacer to match footer structure */}
        </div>
      </header>

      <main className="flex-1">
        {/* Main content will go here later */}
      </main>

      <footer className="bg-[#F7F7F7] w-full">
        <div className="container mx-auto px-1 py-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 ml-[-60px]">
            © 2025 Ship Odyssey, Inc.
          </span>
          <a 
            href="https://linkedin.com/company/ship-odyssey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity mr-[-60px]"
          >
            <Image
              src="/images/linkedin_icon.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="h-auto"
            />
          </a>
        </div>
      </footer>
    </div>
  )
} 