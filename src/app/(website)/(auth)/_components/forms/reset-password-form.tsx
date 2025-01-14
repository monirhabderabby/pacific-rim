"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useForm } from "@/provider/form-provider"

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { setStep } = useForm()
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password === formData.confirmPassword) {
      // Handle password update
      console.log("Password updated successfully")
    }
    setStep('login')
  }

  return (
    <div className="w-full">
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] leading-[43.2px] font-semibold text-[#6EBA6B]">Reset Password</h1>
        <p className="text-[#444444] text-[16px]">Create your new password</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-2">
          <label className='text-[16px] font-normal leading-[19.2px] text-[#444444]' htmlFor="password">
            New Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              className='border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]'
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className='text-[16px] font-normal leading-[19.2px] text-[#444444]' htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <div className="relative">
            <Input
              id="confirmPassword"
              placeholder="Enter your confirm new password"
              type={showConfirmPassword ? "text" : "password"}
              className='border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]'
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-[#2A6C2D] p-[24px] h-[56px]"
        >
          Update Password
        </Button>
      </form>
    </div>
  )
}

