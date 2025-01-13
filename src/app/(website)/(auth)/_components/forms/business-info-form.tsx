'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from "@/provider/form-provider"
import { Plus } from 'lucide-react'

const COUNTRIES = ['USA', 'Canada', 'Mexico', 'Thailand', 'Germany']
const USA_PROVINCES = ['Arizona', 'California', 'Nevada', 'New York', 'Ohio', 'Oklahoma']

export function BusinessInfoForm() {
  const { updateFormData, setStep, formData, getNextStep } = useForm()
  const [formStep, setFormStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formStep < 3) {
      setFormStep(formStep + 1)
    } else {
      setStep(getNextStep('business-info'))
    }
  }

  const renderStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select your business Country</label>
              <Select
                onValueChange={(value) => updateFormData({ country: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select your business Country</label>
              <Select
                value={formData.country}
                onValueChange={(value) => updateFormData({ country: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {formData.country === 'USA' && (
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Select your business Province for USA
                </label>
                <Select
                  onValueChange={(value) => updateFormData({ province: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Province" />
                  </SelectTrigger>
                  <SelectContent>
                    {USA_PROVINCES.map((province) => (
                      <SelectItem key={province} value={province}>
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select your business Country</label>
              <Select
                value={formData.country}
                onValueChange={(value) => updateFormData({ country: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {formData.country === 'USA' && (
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Select your business Province for USA
                </label>
                <Select
                  value={formData.province}
                  onValueChange={(value) => updateFormData({ province: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Province" />
                  </SelectTrigger>
                  <SelectContent>
                    {USA_PROVINCES.map((province) => (
                      <SelectItem key={province} value={province}>
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Provide your Recreational business license
                <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter license number"
                required
                onChange={(e) =>
                  updateFormData({
                    licenses: [
                      { 
                        type: 'Recreational',
                        licenseNumber: e.target.value 
                      },
                      ...(formData.licenses || []).filter(
                        (l: { type: string }) => l.type === 'Reseller'
                      ),
                    ],
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Provide your Reseller business license (optional)
              </label>
              <Input
                placeholder="Enter license number"
                onChange={(e) =>
                  updateFormData({
                    licenses: [
                      ...(formData.licenses || []).filter(
                        (l: { type: string }) => l.type !== 'Reseller'
                      ),
                      { type: 'Reseller', licenseNumber: e.target.value },
                    ],
                  })
                }
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Sign Up</h1>
        <p className="text-gray-500">
          Continue to register as a customer or vendor, Please provide the information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Select your business information</h2>
          {renderStep()}
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            {formStep === 3 ? 'Next' : 'Continue'}
          </Button>
          {formStep === 3 && (
            <Button
              type="button"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add More
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

