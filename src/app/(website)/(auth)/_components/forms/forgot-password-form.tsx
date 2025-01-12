'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from '@/provider/form-provider'
import { Label } from '@/components/ui/label'

export function ForgotPasswordForm() {
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('verify-otp')
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] leading-[43.2px] font-semibold text-[#6EBA6B]">Forgot Password?</h1>
        <p className="text-[#444444] text-[16px]">
          You may receive email notifications from us to reset your password for
          security and login purposes.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className='text-[16px] font-normal leading-[19.2px] text-[#444444]'>Username or Email</Label>
          <Input
            placeholder="Write your email address"
            type="email"
            required
            onChange={(e) => updateFormData({ email: e.target.value })}
            className='border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]'
          />
        </div>
        <Button type="submit" className="w-full bg-[#2A6C2D] p-[24px] h-[56px]">
          Send OTP
        </Button>
      </form>
    </div>
  )
}

