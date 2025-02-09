'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col flex-grow relative">
        <header className="w-full py-4 sm:py-6 lg:py-8">
          <div className="flex justify-between items-center max-w-[100vw] mx-auto">
            <div className="relative w-20 sm:w-24 lg:w-28 -ml-12 sm:-ml-20 lg:-ml-28">
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

        <main className="flex-grow flex items-center relative py-[clamp(2rem,8vh,4rem)]">
          <div className="w-full max-w-[95vw] lg:max-w-[92vw] xl:max-w-[90vw] mx-auto">
            <div className="relative z-10 -mt-[clamp(2rem,5vh,4rem)] -ml-12 sm:-ml-20 lg:-ml-28">
              {/* Main Heading */}
              <h1 className="font-['Aeonik_Pro'] text-[clamp(2.5rem,5vw,5rem)] font-medium mb-3 leading-[1.1] tracking-tight">
                Transport Any<br />
                Biologic, Anywhere.
              </h1>

              {/* Subheading */}
              <p className="font-['Aeonik_Pro'] text-[clamp(1.25rem,2.5vw,2.75rem)] text-gray-400 mb-[clamp(5rem,12vh,8rem)]">
                Seamless healthcare logistics.
              </p>
              
              {/* Contact Form Section */}
              <div className="mt-0">
                <h3 className="font-['ABC_Diatype_Semi_Mono'] text-[13px] sm:text-sm uppercase mb-4 tracking-wider">
                  CONTACT OUR TEAM
                </h3>
                <form className="relative w-full max-w-[clamp(280px,60vw,650px)]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="font-['Aeonik_Pro'] text-[clamp(1.1rem,1.75vw,1.75rem)] w-full px-0 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <div className="bg-[#F7F7F7] p-2.5 sm:p-3">
                      <svg 
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        className="transition-opacity w-5 h-5 sm:w-6 sm:h-6"
                      >
                        <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Globe */}
            <div className="absolute top-[5%] right-[clamp(-30%,-16vw,-6%)] w-[clamp(320px,95vw,1050px)] h-full pointer-events-none">
              <div className="absolute right-0 top-[45%] -translate-y-1/2 w-full">
                <div className="relative w-full transform scale-[1.05] origin-center">
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex justify-between items-center max-w-[100vw] mx-auto">
            <span className="text-sm text-gray-500 -ml-12 sm:-ml-20 lg:-ml-28">
              © 2025 Ship Odyssey, Inc.
            </span>
            <a 
              href="https://linkedin.com/company/ship-odyssey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity -mr-12 sm:-mr-20 lg:-mr-32"
            >
              <Image
                src="/images/linkedin_icon.png"
                alt="LinkedIn"
                width={48}
                height={48}
                className="w-7 sm:w-8 lg:w-10 h-auto"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
} 