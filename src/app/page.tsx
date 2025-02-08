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
      // TODO: Implement AWS email functionality
      console.log('Email submitted:', email)
      setEmail('')
      setShowSuccessMessage(true)
    }
  }

  return (
    <main className="flex-1 flex flex-col p-10">
      <div className="flex flex-1 relative">
        <div className="flex-1 flex flex-col z-10 pt-10 relative">
          <h1 className="text-8xl font-medium leading-tight mb-6 max-w-4xl">
            Transport Any<br />
            Biologic, Anywhere.
          </h1>
          <h2 className="text-6xl font-normal text-gray-600 mb-20 max-w-4xl leading-tight">
            Seamless healthcare logistics.
          </h2>

          <div className="w-[800px] absolute bottom-[300px]">
            <div className="text-base font-medium mb-12 tracking-wider">
              CONTACT OUR TEAM
            </div>
            <form onSubmit={handleSubmit} className="w-full relative">
              <div className="relative flex flex-col border-b border-black pb-0 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  className="w-full py-3 pr-16 pl-0 border-none text-2xl outline-none bg-transparent"
                />
                <button
                  type="submit"
                  disabled={!isValidEmail}
                  className={`absolute right-0 bottom-2 bg-[#f5f5f5] text-2xl w-10 h-10 flex items-center justify-center
                    ${isValidEmail ? 'cursor-pointer text-black' : 'cursor-not-allowed text-gray-400'}`}
                >
                  ›
                </button>
              </div>
              {showSuccessMessage && (
                <div className="absolute w-full text-center text-gray-600 mt-4">
                  We will be in touch shortly
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            src="/images/globe.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  )
} 