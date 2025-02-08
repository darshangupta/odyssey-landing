'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setIsValidEmail(validateEmail(newEmail))
    setShowSuccessMessage(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidEmail) {
      // TODO: Implement email functionality
      console.log('Email submitted:', email)
      setEmail('')
      setShowSuccessMessage(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white ">
      {/* Header */}
      <header className="px-12 pt-12" style={{ marginLeft: '20px' }}>
        <div className="max-w-[1400px] ">
          <div className="flex items-center">
            <Image
              src="/images/Group 2147222271.png"
              alt="Odyssey Logo"
              width={200}
              height={200}
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center overflow-hidden">
        <div className="max-w-[1400px] w-full flex px-12">
          {/* Left Content */}
          <div className="w-1/2 " style={{ marginLeft: '20px'}}>
            <div className="mt-[-80px]">
              <h1 className="font-['Aeonik_Pro'] text-[64px] font-medium mb-4 leading-tight">
                Transport Any<br />
                Biologic, Anywhere.
              </h1>
              <p className="font-['Aeonik_Pro'] text-[40px] text-gray-400 mb-16">
                Seamless healthcare logistics.
              </p>
              
              {/* Contact Form */}
              <div style={{ marginTop: '160px'}}>
                <h3 className="font-['ABC_Diatype_Semi_Mono'] text-[15px] uppercase mb-4 tracking-wider">CONTACT OUR TEAM</h3>
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    className="font-['Aeonik_Pro'] text-[30px] w-full px-0 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400 text-lg"
                  />
                  <button
                    type="submit"
                    disabled={!isValidEmail}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <div className="bg-[#F7F7F7] p-3">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className={`transition-opacity ${isValidEmail ? 'opacity-100' : 'opacity-50'}`}
                      >
                        <path 
                          d="M9 6L15 12L9 18"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </form>
                {showSuccessMessage && (
                  <p className="mt-2 text-green-600">Thank you for your interest!</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Content - Globe */}
          <div className="w-1/2 relative">
            <div className="absolute right-0 translate-x-[30%] translate-y-[-57%] w-[160%] h-[160%] -mx-80">
              <Image
                src="/images/globe.png"
                alt="Global Coverage"
                width={2000}
                height={2000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F7F7F7]">
        <div className="max-w-[1400px] mx-auto py-8">
          <div className="flex justify-between items-center -mx-80">
            <div className="px-24">
              <span className="text-base text-[#666666]">© 2025 Ship Odyssey, Inc.</span>
            </div>
            <div className="px-24">
              <a href="https://linkedin.com/company/ship-odyssey" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin_icon.png"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 