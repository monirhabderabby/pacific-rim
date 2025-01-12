'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from '@/provider/form-provider'

export function ForgotPasswordForm() {
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('verify-otp')
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Forgot Password?</h1>
        <p className="text-gray-500">
          You may receive email notifications from us to reset your password for
          security and login purposes.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Write your email address"
            type="email"
            required
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Send OTP
        </Button>
      </form>
    </div>
  )
}

