'use client'

import { createContext, useContext, useState } from 'react'
import { FormData, FormStep } from '@/types/form'

interface FormContextType {
  step: FormStep
  formData: FormData
  setStep: (step: FormStep) => void
  updateFormData: (data: Partial<FormData>) => void
  getNextStep: (currentStep: FormStep) => FormStep
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<FormStep>('experience')
  const [formData, setFormData] = useState<FormData>({
    licenses: []
  })

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const getNextStep = (currentStep: FormStep): FormStep => {
    if (currentStep === 'experience') {
      if (formData.experience === 'Recreational Cannabis') {
        return 'email'
      }
      return 'user-info'
    }

    if (currentStep === 'email') {
      return 'business-info'
    }

    if (currentStep === 'business-info') {
      return 'user-info'
    }

    return 'experience'
  }

  return (
    <FormContext.Provider value={{ 
      step, 
      setStep, 
      formData, 
      updateFormData,
      getNextStep 
    }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (!context) throw new Error('useForm must be used within FormProvider')
  return context
}

