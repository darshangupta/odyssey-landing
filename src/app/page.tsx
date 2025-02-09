'use client'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col flex-grow relative">
        <header className="w-full py-8">
          <div className="flex justify-between items-center">
            <Image
              src="/images/Group 2147222271.png"
              alt="Odyssey Logo"
              width={200}
              height={200}
              className="-ml-16 sm:-ml-32 md:-ml-48 lg:-ml-64 xl:-ml-96 w-28 lg:w-32"
              priority
            />
          </div>
        </header>

        <main className="flex-grow flex items-center relative">
          <div className="w-full">
            <div className="-ml-16 sm:-ml-32 md:-ml-48 lg:-ml-64 xl:-ml-96 mt-8 lg:-mt-16 xl:-mt-24 max-w-5xl relative z-10">
              {/* Main Heading */}
              <h1 className="font-['Aeonik_Pro'] text-6xl lg:text-7xl xl:text-8xl font-medium mb-4 leading-tight">
                Transport Any<br />
                Biologic, Anywhere.
              </h1>

              {/* Subheading */}
              <p className="font-['Aeonik_Pro'] text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-400 mb-32">
                Seamless healthcare logistics.
              </p>
              
              {/* Contact Form Section */}
              <div className="mt-32">
                <h3 className="font-['ABC_Diatype_Semi_Mono'] text-sm md:text-base uppercase mb-4 tracking-wider">
                  CONTACT OUR TEAM
                </h3>
                <form className="relative w-full max-w-[51.5rem]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="font-['Aeonik_Pro'] text-2xl md:text-3xl lg:text-4xl w-full px-0 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400"
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
            <div className="absolute top-0 right-0 w-screen h-full pointer-events-none">
              <div className="absolute right-0 sm:right-[-5%] md:right-[-10%] lg:right-[-15%] xl:right-[-22.5%] top-1/2 -translate-y-1/2 w-[min(85%,800px)] md:w-[min(90%,900px)] lg:w-[min(95%,1000px)] xl:w-[1100px]">
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
      </div>

      <footer className="bg-[#F7F7F7] w-full mt-auto relative z-20">
        <div className="container mx-auto max-w-7xl py-4 flex justify-between items-center">
            <span className="text-sm text-gray-500 -ml-16 sm:-ml-32 md:-ml-48 lg:-ml-64 xl:-ml-96">
              © 2025 Ship Odyssey, Inc.
            </span>
            <a 
              href="https://linkedin.com/company/ship-odyssey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity -mr-16 sm:-mr-32 md:-mr-48 lg:-mr-64 xl:-mr-96"
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
      </footer>
    </div>
  )
} 