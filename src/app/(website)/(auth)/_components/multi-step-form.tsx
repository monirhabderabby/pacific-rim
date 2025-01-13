'use client'

import { useForm } from '@/provider/form-provider'
import { ExperienceForm } from './forms/experience-form'
import { EmailForm } from './forms/email-form'
import { BusinessInfoForm } from './forms/business-info-form'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import SignUpForm from './forms/UserInfoSignUp'
import { LoginForm } from './forms/login-form'
import { ForgotPasswordForm } from './forms/forgot-password-form'
import { ResetPasswordForm } from './forms/reset-password-form'
import { VerifyOTPForm } from './forms/verify-otp-form'
import CheckProfession from './forms/check-profession'

export function MultiStepForm() {
  const { step, setStep, getNextStep } = useForm()

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
      case 'profession':
        return <CheckProfession />
      case 'email':
        return <EmailForm />
      case 'user-info':
        return <SignUpForm />
      case 'business-info':
        return <BusinessInfoForm />
      default:
        return <LoginForm />
    }
  }

  return (
    <div className="min-h-screen ">
      <div className="mx-auto container px-4 py-8">
        <div className="relative rounded-lg">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="Pacific Rim Fusion"
                width={40}
                height={40}
                className="rounded-full"
              />
              {step !== 'experience' && (
                <button
                  onClick={() => setStep(getNextStep('experience'))}
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
                src="/assets/img/signup.png"
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

