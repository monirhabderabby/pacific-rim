'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { useForm } from '@/provider/form-provider'


interface Profession {
  id: string
  label: string
}

const professions: Profession[] = [
  { id: 'farmer', label: 'Farmer' },
  { id: 'cultivator', label: 'Cultivator' },
  { id: 'processor', label: 'Processor' },
  { id: 'extractor', label: 'Extractor' },
  { id: 'dispensary', label: 'Dispensary' },
  { id: 'distributor', label: 'Distributor' },
  { id: 'consumer', label: 'Consumer' },
]

export default function CheckProfession() {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([])
  const { setStep, getNextStep } = useForm()

  const handleProfessionChange = (professionId: string) => {
    setSelectedProfessions(current => {
      if (current.includes(professionId)) {
        return current.filter(id => id !== professionId)
      }
      return [...current, professionId]
    })
  }

  return (
    <div className="bg-background">
      <div className=" px-4 py-6 mx-auto">
      
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-green-600">Sign Up</h1>
              <p className="text-muted-foreground">
                Continue to register as a customer or vendor. Please provide the information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">What&apos;s your profession?</h2>
              <div className="grid gap-4">
                {professions.map((profession) => (
                  <div key={profession.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={profession.id}
                      checked={selectedProfessions.includes(profession.id)}
                      onCheckedChange={() => handleProfessionChange(profession.id)}
                    />
                    <label
                      htmlFor={profession.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {profession.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={()=> setStep(getNextStep('profession'))}
              disabled={selectedProfessions.length === 0}
            >
              Next
            </Button>
          </div>
      </div>
    </div>
  )
}

