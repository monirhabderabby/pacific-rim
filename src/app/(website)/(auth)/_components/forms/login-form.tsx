'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from '@/provider/form-provider'
import Link from 'next/link'

// Default credentials (for demonstration purposes only)
const DEFAULT_EMAIL = 'user@example.com'
const DEFAULT_PASSWORD = 'password123'

export function LoginForm() {
  const { updateFormData, setStep } = useForm()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '', terms: '' })

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required'
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email) ? '' : 'Please enter a valid email address'
  }

  const validatePassword = (password: string) => {
    if (!password) return 'Password is required'
    return password.length >= 8 ? '' : 'Password must be at least 8 characters long'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)
    const termsError = !agreed ? 'Please agree to the terms and privacy policy' : ''

    const newErrors = {
      email: emailError,
      password: passwordError,
      terms: termsError
    }

    setErrors(newErrors)

    // Check if there are any errors
    if (emailError || passwordError || termsError) {
      return
    }

    // Check against default credentials
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      console.log('Login successful')
      updateFormData({ email, password })
       // Replace 'next-step' with your actual next step
    } else {
      setErrors({
        ...newErrors,
        password: 'Invalid email or password combination'
      })
    }
  }

  return (
    <div className="w-full">
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] leading-[43.2px] font-semibold text-[#6EBA6B] mb-[27px]">Log In</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className='text-[16px] font-normal leading-[19.2px] text-[#444444]'>
            Username or Email<span className="text-[#E70F0F]">*</span>
          </Label>
          <Input
            id="email"
            placeholder="Write your user name or email"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (errors.email) {
                setErrors(prev => ({ ...prev, email: '' }))
              }
            }}
            className='border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]'
          />
          {errors.email && <p className="text-[#E70F0F] text-sm">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className='text-[16px] font-normal leading-[19.2px] text-[#444444]'>
            Password<span className="text-[#E70F0F]">*</span>
          </Label>
          <Input
            id="password"
            required
            type="password"
            placeholder="Write your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) {
                setErrors(prev => ({ ...prev, password: '' }))
              }
            }}
            className='border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]'
          />
          {errors.password && <p className="text-[#E70F0F] text-sm">{errors.password}</p>}
        </div>
        <div className="flex items-center space-x-2 text-[#9E9E9E]">
          <Checkbox 
            id="remember" 
            checked={agreed}
            onCheckedChange={(checked) => {
              setAgreed(checked as boolean)
              if (errors.terms) {
                setErrors(prev => ({ ...prev, terms: '' }))
              }
            }}
            className='w-[16px] h-[16px] border-2 border-[#9E9E9E] data-[state=checked]:bg-white data-[state=checked]:text-[#2A6C2D]'
          />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree with the <Link href="#" className='text-[#4CAF50]'>term of service</Link> and <Link href="#" className='text-[#4CAF50]'>privacy policy</Link> 
          </label>
        </div>
        {errors.terms && <p className="text-[#E70F0F] text-sm">{errors.terms}</p>}
        
        <Button type="submit" className="w-full bg-[#2A6C2D] p-[24px] h-[56px]">
          Log In
        </Button>
      </form>
      <div className="text-center">
        <div>
          <button
            className="text-[#2A6C2D] text-[16px] font-normal leading-[19.2px] my-[20px]"
            onClick={() => setStep('forgot-password')}
          >
            Forgot Password?
          </button>
        </div>
        <span className="text-[16px] text-[#808080]">Don&apos;t have an account? </span>
        <Link
          href="#"
          className="text-[#2A6C2D] text-[16px] font-normal"
          onClick={() => setStep('experience')}
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

