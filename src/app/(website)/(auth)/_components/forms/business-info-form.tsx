'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm } from '@/provider/form-provider'

const COUNTRIES = [
  {
    name: 'USA',
    provinces: [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
    ],
  },
  {
    name: 'Canada',
    provinces: ['Ontario', 'Quebec', 'British Columbia'],
  },
  {
    name: 'Mexico',
    provinces: ['Jalisco', 'Nuevo León', 'Yucatán'],
  },
]

export function BusinessInfoForm() {
  const { updateFormData, setStep, formData } = useForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('user-info')
  }

  const selectedCountry = COUNTRIES.find((c) => c.name === formData.country)

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Sign Up</h1>
        <p className="text-gray-500">
          Continue to register as a customer or vendor, Please provide the information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold">Select your business information</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Select
              onValueChange={(value) => updateFormData({ country: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.name} value={country.name}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedCountry && (
            <div className="space-y-2">
              <Select
                onValueChange={(value) => updateFormData({ province: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Province" />
                </SelectTrigger>
                <SelectContent>
                  {selectedCountry.provinces.map((province) => (
                    <SelectItem key={province} value={province}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="space-y-2">
            <Input
              placeholder="Enter CBD business license number"
              required
              onChange={(e) =>
                updateFormData({
                  licenses: [
                    { type: 'CBD', licenseNumber: e.target.value },
                    ...(formData.licenses || []).filter(
                      (l) => l.type === 'Reseller'
                    ),
                  ],
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Enter Reseller business license (optional)"
              onChange={(e) =>
                updateFormData({
                  licenses: [
                    ...(formData.licenses || []).filter((l) => l.type === 'CBD'),
                    { type: 'Reseller', licenseNumber: e.target.value },
                  ],
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Next
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep('user-info')}
          >
            Skip
          </Button>
        </div>
      </form>
    </div>
  )
}

