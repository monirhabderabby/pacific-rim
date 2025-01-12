'use client'

import { Button } from '@/components/ui/button'
import { useForm } from '@/provider/form-provider'
import { Checkbox } from '@/components/ui/checkbox'

export function ExperienceForm() {
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('business-info')
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Sign Up</h1>
        <p className="text-gray-500">
          Continue to register as a customer or vendor, Please provide the information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold">What do you want to experience?</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="cbd"
              onCheckedChange={() => updateFormData({ experience: 'CBD/HEMP' })}
            />
            <label
              htmlFor="cbd"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              CBD/HEMP
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="recreational"
              onCheckedChange={() =>
                updateFormData({ experience: 'Recreational Cannabis' })
              }
            />
            <label
              htmlFor="recreational"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Recreational Cannabis
            </label>
          </div>
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Next
        </Button>
      </form>
    </div>
  )
}

