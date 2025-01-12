'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from '@/provider/form-provider'

export function ResetPasswordForm() {
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('login')
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Reset Password</h1>
        <p className="text-gray-500">Create your new password</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Enter your new password"
            required
            onChange={(e) => updateFormData({ password: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Enter your confirm new password"
            required
            onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Update Password
        </Button>
      </form>
    </div>
  )
}

