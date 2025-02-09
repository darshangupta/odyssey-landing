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
    if (!isValidEmail) return
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error('Failed to send email')
      setEmail('')
      setShowSuccessMessage(true)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER SECTION
          Positioning: Adjust -ml-[13vw] to move logo left/right */}
      <header className="w-full px-[5%] pt-8 md:pt-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full md:w-1/2 -ml-[13vw]">
            <Image
              src="/images/Group 2147222271.png"
              alt="Odyssey Logo"
              width={200}
              height={200}
              className="w-[clamp(32px,8vw,160px)] h-auto"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className="flex-1 flex items-center overflow-hidden py-8 md:py-0">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row px-[5%]">
          {/* LEFT CONTENT
              Positioning Controls:
              - Horizontal: Adjust -ml-[40vw] or pl-[5vw]
              - Vertical: Adjust mt-[5vh] */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="-ml-[5vw] md:-ml-[18vw] mt-[5vh] md:mt[10vh]">
              {/* Main Heading - Adjust text-[min(64px,8vw)] for size */}
              <h1 className="font-['Aeonik_Pro'] text-[min(64px,8vw)] md:text-[min(64px,5vw)] font-medium mb-4 leading-tight">
                Transport Any<br />
                Biologic, Anywhere.
              </h1>

              {/* Subheading - Adjust text-[min(40px,5vw)] for size */}
              <p className="font-['Aeonik_Pro'] text-[min(40px,5vw)] md:text-[min(40px,3vw)] text-gray-400 mb-8 md:mb-16">
                Seamless healthcare logistics.
              </p>
              
              {/* Contact Form Section */}
              <div className="mt-8 md:mt-[10vh]">
                <h3 className="font-['ABC_Diatype_Semi_Mono'] text-[min(15px,1.5vw)] md:text-[min(15px,1.2vw)] uppercase mb-4 tracking-wider">
                  CONTACT OUR TEAM
                </h3>
                <form onSubmit={handleSubmit} className="relative max-w-[90%]">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    className="font-['Aeonik_Pro'] text-[min(30px,4vw)] md:text-[min(30px,2vw)] w-full px-0 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={!isValidEmail}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <div className="bg-[#F7F7F7] p-3">
                      <svg 
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        className={`transition-opacity ${isValidEmail ? 'opacity-100' : 'opacity-50'}`}
                      >
                        <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

          {/* GLOBE SECTION
              Positioning Controls:
              - Horizontal: Adjust md:right-[-20%]
              - Size: Adjust w-[150%] and md:w-[180%] */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute right-0 md:right-[-80%] top-[50%] -translate-y-1/2 w-[150%] md:w-[180%]">
              <Image
                src="/images/globe.png"
                alt="Global Coverage"
                width={4000}
                height={4000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER SECTION
          Positioning Controls:
          - Text: Adjust -ml-80
          - Icon: Adjust -mr-80 */}
      <footer className="bg-[#F7F7F7] mt-auto">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto py-6 md:py-8 px-[2%]">
          <span className="text-[min(16px,1.2vw)] md:text-[min(16px,1vw)] text-[#666666] -ml-80">
            © 2025 Ship Odyssey, Inc.
          </span>
          <a href="https://linkedin.com/company/ship-odyssey" target="_blank" rel="noopener noreferrer" className="-mr-80">
            <Image
              src="/images/linkedin_icon.png"
              alt="LinkedIn"
              width={48}
              height={48}
              className="w-[min(48px,4vw)] md:w-[min(48px,3vw)] h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </footer>
    </div>
  )
} 