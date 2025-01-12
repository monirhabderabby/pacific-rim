'use client'

import { useForm } from '@/provider/form-provider'
import { ExperienceForm } from './forms/experience-form'
import { EmailForm } from './forms/email-form'
import { BusinessInfoForm } from './forms/business-info-form'
import { UserInfoForm } from './forms/user-info-form'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export function MultiStepForm() {
  const { step, setStep } = useForm()

  const renderStep = () => {
    switch (step) {
      case 'experience':
        return <ExperienceForm />
      case 'email':
        return <EmailForm />
      case 'business-info':
        return <BusinessInfoForm />
      case 'user-info':
        return <UserInfoForm />
      default:
        return <ExperienceForm />
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
                  onClick={() => setStep('experience')}
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

