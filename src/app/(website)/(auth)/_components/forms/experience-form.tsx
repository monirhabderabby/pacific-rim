'use client'
import NextButton from './button'
import { useForm } from '@/provider/form-provider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function ExperienceForm() {
  const { updateFormData, setStep } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("profession")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl  font-semibold text-[#6EBA6B]">Sign Up</h1>
        <p className="text-gray-500 text-xs">
          Continue to register as a customer or vendor, Please provide the information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className=" text-[32px] font-medium">What do you want to experience?</h2>
          <RadioGroup
            onValueChange={(value) => 
              updateFormData({ experience: value as 'CBD/HEMP' | 'Recreational Cannabis' })
            }
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="CBD/HEMP" id="cbd" />
              <Label htmlFor="cbd">CBD/HEMP</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Recreational Cannabis" id="recreational" />
              <Label htmlFor="recreational">Recreational Cannabis</Label>
            </div>
          </RadioGroup>
        </div>
        <NextButton disable={false} />
      </form>
    </div>
  )
}

