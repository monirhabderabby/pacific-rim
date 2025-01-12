'use client'

import { useForm } from '@/provider/form-provider'
import { LoginForm } from './forms/login-form'
import { ForgotPasswordForm } from './forms/forgot-password-form'
import { VerifyOTPForm } from './forms/verify-otp-form'
import { ResetPasswordForm } from './forms/reset-password-form'
import { ExperienceForm } from './forms/experience-form'
import { BusinessInfoForm } from './forms/business-info-form'
import { UserInfoForm } from './forms/user-info-form'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export function MultiStepForm() {
  const { step, setStep } = useForm()

  const renderStep = () => {
    switch (step) {
      case 'login':
        return <LoginForm />
      case 'forgot-password':
        return <ForgotPasswordForm />
      case 'verify-otp':
        return <VerifyOTPForm />
      case 'reset-password':
        return <ResetPasswordForm />
      case 'experience':
        return <ExperienceForm />
      case 'business-info':
        return <BusinessInfoForm />
      case 'user-info':
        return <UserInfoForm />
      default:
        return <LoginForm />
    }
  }

  const canGoBack = step !== 'login'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="relative rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              {canGoBack && (
                <button
                  onClick={() => setStep('login')}
                  className="flex items-center text-gray-500 hover:text-gray-700"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </button>
              )}
            </div>
          </div>
          <div className="grid min-h-[600px] md:grid-cols-2">
            <div className="relative hidden md:block">
              <Image
                src=""
                alt="CBD Products"
                fill
                className="rounded-l-lg object-cover"
              />
            </div>
            <div className="p-8">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

