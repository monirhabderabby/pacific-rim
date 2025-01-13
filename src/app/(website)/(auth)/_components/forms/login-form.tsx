'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from '@/provider/form-provider'
import Link from 'next/link'

export function LoginForm() {
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="w-full">
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] leading-[43.2px] font-semibold text-[#6EBA6B]">Log In</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className='text-[16px] font-normal leading-[19.2px] text-[#444444]'>Username or Email<span className="text-[#E70F0F]">*</span></Label>
          <Input
            id="email"
            placeholder="Write your user name or email"
            required
            type="email"
            onChange={(e) => updateFormData({ email: e.target.value })}
            className='border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]'
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className='text-[16px] font-normal leading-[19.2px] text-[#444444]'>Password<span className="text-[#E70F0F]">*</span></Label>
          <Input
            id="password"
            required
            type="password"
            placeholder="Write your password"
            onChange={(e) => updateFormData({ password: e.target.value })}
            className='border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]'
          />
        </div>
          <div className="flex items-center space-x-2 text-[#9E9E9E]">
            <Checkbox id="remember" className='w-[16px] h-[16px] border-2 border-[#9E9E9E] data-[state=checked]:bg-white data-[state=checked]:text-[#2A6C2D]'/>
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree with the <Link href="#" className='text-[#4CAF50]'>term of service</Link> and <Link href="#" className='text-[#4CAF50]'>privacy policy</Link> 
            </label>
        </div>
        
        <Button type="submit" className="w-full bg-[#2A6C2D] p-[24px] h-[56px]">
          Log In
        </Button>
      </form>
      <div className="text-center">
        <div>
          <Button
            variant="link"
            className="text-[#2A6C2D] text-[16px] font-normal leading-[19.2px] mt-2"
            onClick={() => setStep('forgot-password')}
          >
            Forgot Password?
          </Button>
        </div>
        <span className="text-[16px] text-[#808080]">Don&apos;t have an account? </span>
        <Link
          href=""
          className="text-[#2A6C2D] text-[16px] font-normal"
          onClick={() => setStep('experience')}
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

