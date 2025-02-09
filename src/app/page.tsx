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
      {/* HEADER SECTION */}
      <header className="w-full px-[5%] pt-[2vh] md:pt-[3vh]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full md:w-1/2 md:-ml-[13.5vw]">
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
      <main className="flex-1 flex items-center overflow-hidden min-h-[80vh]">
        <div className="relative max-w-[90vw] w-full mx-auto flex flex-col md:flex-row md:-translate-x-[15vw]">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[45vw] mb-12 md:mb-0">
            <div className="md:translate-x-[1.5vw] md:translate-y-[clamp(-50px,-5vh,-20px)]">
              {/* Main Heading */}
              <h1 className="font-['Aeonik_Pro'] text-[4.5vw] font-medium mb-[2vh] leading-tight">
                Transport Any<br />
                Biologic, Anywhere.
              </h1>

              {/* Subheading */}
              <p className="font-['Aeonik_Pro'] text-[2.5vw] text-gray-400 mb-[3vh]">
                Seamless healthcare logistics.
              </p>
              
              {/* Contact Form Section */}
              <div className="mt-[4vh]">
                <h3 className="font-['ABC_Diatype_Semi_Mono'] text-[1vw] uppercase mb-[2vh] tracking-wider">
                  CONTACT OUR TEAM
                </h3>
                <form onSubmit={handleSubmit} className="relative w-[35vw]">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    className="font-['Aeonik_Pro'] text-[1.8vw] w-full px-0 py-[1vh] border-b border-gray-300 focus:border-black outline-none transition-colors placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={!isValidEmail}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <div className="bg-[#F7F7F7] p-[1vh]">
                      <svg 
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        className={`transition-opacity ${isValidEmail ? 'opacity-100' : 'opacity-50'} w-[1.5vw] h-[1.5vw]`}
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

          {/* GLOBE SECTION */}
          <div className="w-full md:w-[50vw] fixed md:fixed right-0 top-0 h-full pointer-events-none">
            <div className="absolute right-[-33vw] top-[45%] -translate-y-1/2 w-[110%] md:w-[110%] min-w-[800px]">
              <Image
                src="/images/globe.png"
                alt="Global Coverage"
                width={8000}
                height={8000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-[#F7F7F7] mt-auto">
        <div className="flex justify-between items-center w-full mx-auto py-[2vh] px-[5%]">
          <span className="text-[1vw] text-[#666666] md:-ml-[18.5vw]">
            © 2025 Ship Odyssey, Inc.
          </span>
          <a href="https://linkedin.com/company/ship-odyssey" target="_blank" rel="noopener noreferrer" className="md:-mr-[18.5vw]">
            <Image
              src="/images/linkedin_icon.png"
              alt="LinkedIn"
              width={48}
              height={48}
              className="w-[2vw] h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </footer>
    </div>
  )
} 