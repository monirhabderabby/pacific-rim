'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from '@/provider/form-provider'

export function EmailForm() {
  const { updateFormData, setStep, getNextStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(getNextStep('email'))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Sign Up</h1>
        <p className="text-gray-500">
          Continue to register as a customer or vendor, Please provide the information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Enter your email address</h2>
          <Input
            placeholder="Write your email"
            type="email"
            required
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Next
        </Button>
      </form>
    </div>
  )
}

