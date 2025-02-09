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
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-1 flex justify-between items-center h-full">
          <div className="ml-[-60px] flex flex-col mt-[120px]">
            {/* Main Heading */}
            <h1 className="font-['Aeonik_Pro'] text-[72px] font-medium mb-4 leading-tight">
              Transport Any<br />
              Biologic, Anywhere.
            </h1>

            {/* Subheading */}
            <p className="font-['Aeonik_Pro'] text-[44px] text-gray-400 mb-16">
              Seamless healthcare logistics.
            </p>
            
            {/* Contact Form Section */}
            <div className="mt-[80px]">
              <h3 className="font-['ABC_Diatype_Semi_Mono'] text-[14px] uppercase mb-4 tracking-wider">
                CONTACT OUR TEAM
              </h3>
              <form className="relative w-[615px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="font-['Aeonik_Pro'] text-[28px] w-full px-0 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <div className="bg-[#F7F7F7] p-3">
                    <svg 
                      width="24" height="24" viewBox="0 0 24 24" fill="none"
                      className="transition-opacity"
                    >
                      <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[1920px] h-screen overflow-hidden pointer-events-none">
            <div className="absolute right-[0%] top-1/2 -translate-y-1/2 w-[60%]">
              <Image
                src="/images/globe.png"
                alt="Globe Visualization"
                width={1500}
                height={1500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#F7F7F7] w-full relative z-10">
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