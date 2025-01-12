'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from '@/provider/form-provider'

export function VerifyOTPForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('reset-password')
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Please Try Again.</h1>
        <p className="text-red-500">Your OTP is Wrong!</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              type="text"
              maxLength={1}
              className="h-12 text-center text-xl"
              onChange={(e) => {
                if (e.target.value && e.target.nextElementSibling) {
                  (e.target.nextElementSibling as HTMLInputElement).focus()
                }
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Type Your OTP Correctly?</span>
          <Button
            type="button"
            variant="link"
            className="text-green-600"
            onClick={() => setStep('forgot-password')}
          >
            Resend
          </Button>
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Verify
        </Button>
      </form>
    </div>
  )
}

