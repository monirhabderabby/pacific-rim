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

  const getNextStep = (currentStep: FormStep): any => {
    const experience = formData.experience;
  
    switch (currentStep) {
      case 'experience':
        if (experience === 'CBD/HEMP') {
          return 'profession';
        } else if (experience === 'Recreational Cannabis') {
          return 'profession';
        }
        break;
  
      case 'profession':
        return experience === 'CBD/HEMP' ? 'user-info' : 'email';
  
      case 'email':
        return 'business-info';

      case 'business-info':
        return experience === 'CBD/HEMP' ? 'login' : 'user-info';

      case 'user-info':
        return experience === 'CBD/HEMP' ? 'business-info' : 'login';


      default:
        return 'login';
    }
  };



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

