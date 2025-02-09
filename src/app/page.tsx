'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-grow relative">
        <header className="w-full py-6 sm:py-8">
          <div className="flex justify-between items-center">
            <div className="relative w-24 sm:w-28 lg:w-32">
              <Image
                src="/images/Group 2147222271.png"
                alt="Odyssey Logo"
                width={200}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </header>

        <main className="flex-grow flex items-center relative">
          <div className="w-full max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] mx-auto">
            <div className="relative z-10">
              {/* Main Heading */}
              <h1 className="font-['Aeonik_Pro'] text-[clamp(2.5rem,5vw,5rem)] font-medium mb-4 leading-tight">
                Transport Any<br />
                Biologic, Anywhere.
              </h1>

              {/* Subheading */}
              <p className="font-['Aeonik_Pro'] text-[clamp(1.5rem,3vw,3rem)] text-gray-400 mb-[clamp(2rem,8vh,6rem)]">
                Seamless healthcare logistics.
              </p>
              
              {/* Contact Form Section */}
              <div className="mt-[clamp(2rem,8vh,6rem)]">
                <h3 className="font-['ABC_Diatype_Semi_Mono'] text-sm sm:text-base uppercase mb-4 tracking-wider">
                  CONTACT OUR TEAM
                </h3>
                <form className="relative w-full max-w-[clamp(300px,80vw,800px)]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="font-['Aeonik_Pro'] text-[clamp(1.25rem,2vw,2rem)] w-full px-0 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400"
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

            {/* Globe */}
            <div className="absolute top-0 right-[clamp(-20%,0vw,0%)] w-[clamp(300px,90vw,1000px)] h-full pointer-events-none">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full">
                <div className="relative w-full">
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
          </div>
        </main>
      </div>

      <footer className="bg-[#F7F7F7] w-full mt-auto relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center max-w-[90vw] mx-auto">
            <span className="text-sm text-gray-500">
              © 2025 Ship Odyssey, Inc.
            </span>
            <a 
              href="https://linkedin.com/company/ship-odyssey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/linkedin_icon.png"
                alt="LinkedIn"
                width={48}
                height={48}
                className="w-8 sm:w-10 lg:w-12 h-auto"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
} 