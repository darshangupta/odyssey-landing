'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white max-w-[2000px] mx-auto">
      <header className="w-full">
        <div className="container max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center">
          <div className="ml-[min(calc(-14.25vw),-200px)]">
            <Image
              src="/images/Group 2147222271.png"
              alt="Odyssey Logo"
              width={200}
              height={200}
              className="w-[clamp(100px,6vw,120px)] h-auto"
              priority
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-[1400px] mx-auto px-6 flex justify-between items-center h-full">
          <div className="ml-[min(calc(-14.25vw),-200px)] flex flex-col mt-[clamp(200px,20vh,260px)]">
            {/* Main Heading */}
            <h1 className="font-['Aeonik_Pro'] text-[clamp(56px,4.5vw,72px)] font-medium mb-4 leading-tight">
              Transport Any<br />
              Biologic, Anywhere.
            </h1>

            {/* Subheading */}
            <p className="font-['Aeonik_Pro'] text-[clamp(32px,2.8vw,44px)] text-gray-400 mb-[clamp(48px,6vh,64px)]">
              Seamless healthcare logistics.
            </p>
            
            {/* Contact Form Section */}
            <div className="mt-[clamp(60px,6vh,80px)]">
              <h3 className="font-['ABC_Diatype_Semi_Mono'] text-[clamp(12px,0.9vw,14px)] uppercase mb-4 tracking-wider">
                CONTACT OUR TEAM
              </h3>
              <form className="relative w-[clamp(480px,40vw,615px)]">
                <input
                  type="email"
                  placeholder="Email"
                  className="font-['Aeonik_Pro'] text-[clamp(24px,2vw,28px)] w-full px-0 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400"
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
          <div className="absolute top-0 right-0 w-full h-screen overflow-hidden pointer-events-none">
            <div className="absolute right-[0%] top-[47.5%] -translate-y-1/2" style={{ width: 'min(85%, 1200px)' }}>
              <Image
                src="/images/globe.png"
                alt="Globe Visualization"
                width={2000}
                height={2000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#F7F7F7] w-screen relative z-10 left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <div className="container max-w-[1400px] mx-auto px-6 py-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-gray-500 ml-[min(calc(-14.25vw),-200px)]">
              © 2025 Ship Odyssey, Inc.
            </span>
            <a 
              href="https://linkedin.com/company/ship-odyssey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity mr-[min(calc(-14.25vw),-200px)]"
            >
              <Image
                src="/images/linkedin_icon.png"
                alt="LinkedIn"
                width={48}
                height={48}
                className="h-auto"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
} 