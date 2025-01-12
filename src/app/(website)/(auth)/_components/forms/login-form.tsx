'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from '@/provider/form-provider'

export function LoginForm() {
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Log In</h1>
        <p className="text-gray-500">Enter your credentials to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Username or Email</Label>
          <Input
            id="email"
            placeholder="Write your user name or email"
            required
            type="email"
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            required
            type="password"
            placeholder="Write your password"
            onChange={(e) => updateFormData({ password: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Button
            variant="link"
            className="text-green-600 hover:text-green-700"
            onClick={() => setStep('forgot-password')}
          >
            Forgot Password?
          </Button>
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Log In
        </Button>
      </form>
      <div className="text-center">
        <span className="text-sm text-gray-500">Don&apos;t have an account? </span>
        <Button
          variant="link"
          className="text-green-600 hover:text-green-700"
          onClick={() => setStep('experience')}
        >
          Sign Up
        </Button>
      </div>
    </div>
  )
}

