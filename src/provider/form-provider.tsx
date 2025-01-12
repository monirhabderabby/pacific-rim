'use client'

import { createContext, useContext, useState } from 'react'
import { FormData, FormStep } from '@/types/form'

interface FormContextType {
  step: FormStep
  formData: FormData
  setStep: (step: FormStep) => void
  updateFormData: (data: Partial<FormData>) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<FormStep>('login')
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  return (
    <FormContext.Provider value={{ step, setStep, formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (!context) throw new Error('useForm must be used within FormProvider')
  return context
}

