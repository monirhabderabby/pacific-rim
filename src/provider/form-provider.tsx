'use client'

import { createContext, useContext, useState } from 'react'
import { FormData, FormStep } from '@/types/form'

interface FormContextType {
  step: FormStep
  formData: FormData
  setStep: (step: FormStep) => void
  updateFormData: (data: Partial<FormData>) => void
  getNextStep: (currentStep: FormStep) => FormStep
  getPrevStep: (currentStep: FormStep) => FormStep
  getFormLayout: (experience: string) => any
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<FormStep>('experience')
  const [formData, setFormData] = useState<FormData>({} as FormData)

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
        return 'country'; 
          
      case 'country':
        return 'business-info'; // add country selector before business info

      case 'business-info':
        return experience === 'CBD/HEMP' ? 'login' : 'cannabis';
      case 'cannabis':	
        return 'login'
      
      case 'user-info': 
        return experience === 'CBD/HEMP' ? 'country' : 'login'; // add country selector
      
     
      default:
        return 'login';
    }
  };

  const getPrevStep = (currentStep: FormStep): FormStep => {
    const experience = formData.experience;
  
    switch (currentStep) {
      case 'profession':
        return experience === 'CBD/HEMP' ? 'experience' : 'email';
      case 'email':
        return 'profession';
      case 'user-info':
        return experience === 'CBD/HEMP' ? 'profession' : 'email';
      case 'business-info':
        return experience === 'CBD/HEMP' ? 'user-info' : 'email';
      case 'login':
        return 'experience';
      default:
        return 'login';
    }
  };

  const getFormLayout = (experience: string): any => {
    if (experience === 'CBD/HEMP') {
      return {
        steps: ['user-info', 'email', 'business-info', 'login'],
        fields: {
          'user-info': ['fullName', 'password', 'confirmPassword'],
          'email': ['email'],
          'business-info': ['businessName', 'businessAddress'],
          'login': ['login'],
        },
      };
    } else if (experience === 'Recreational Cannabis') {
      return {
        steps: ['user-info', 'business-info', 'email', 'login'],
        fields: {
          'user-info': ['fullName', 'password', 'confirmPassword'],
          'business-info': ['businessName', 'businessAddress'],
          'email': ['email'],
          'login': ['login'],
        },
      };
    }
  };

  return (
    <FormContext.Provider value={{ 
      step,
      setStep,
      getNextStep,
      getPrevStep,
      formData,
      updateFormData,
      getFormLayout
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

