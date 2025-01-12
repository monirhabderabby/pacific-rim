'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get('email'),
      fullName: formData.get('fullName'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword')
    }
    console.log('Form Data:', data)
  }

  return (
    <div className=" max-w-[570px] mx-auto ">
      <div className="text-center mb-8">
        <h1 className="text-[36px] font-semibold text-[#6EBA6B] !leading-[43px] mb-2">Sign Up</h1>
        <p className="text-[12px]  text-[#6D6D6D] font-normal">Continue to register as a customer or vendor, Please provide the information.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-[28px] font-medium text-[#000000] mb-4">Enter your Email, Name & Password</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-[20px]">
        <div className="space-y-2">
          <Label className='text-[20px] text-[#444444]' htmlFor="email">Email address</Label>
          <Input
          className='p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]'
            id="email"
            name="email"
            type="email"
            placeholder="Write your email"
            required
          />
        </div>

        <div className="space-y-2 ">
          <Label className='text-[20px] text-[#444444]' htmlFor="fullName ">Full Name</Label>
          <Input 
          className='p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]'
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Write your full name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label className='text-[20px] text-[#444444]' htmlFor="password">Password</Label>
          <div className="relative">
            <Input
            className='p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]'
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4 text-gray-500" />
              ) : (
                <EyeIcon className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label className='text-[20px]  text-[#444444]' htmlFor="confirmPassword">Confirm password</Label>
          <div className="relative">
            <Input
            className='p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]'
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOffIcon className="h-4 w-4 text-gray-500" />
              ) : (
                <EyeIcon className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" className=" bg-green-600 hover:bg-green-700">
          Next
        </Button>
      </form>
    </div>
  )
}

