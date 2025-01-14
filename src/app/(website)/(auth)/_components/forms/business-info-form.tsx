'use client'

import { useState, useEffect } from 'react'
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
import { BusinessStore } from '@/types/form'
import { AdminApprovalModal } from '../modal/admin-aproval-modal' 

const COUNTRIES = ['USA', 'Canada', 'Mexico', 'Thailand', 'Germany']
const USA_PROVINCES = ['Arizona', 'California', 'Nevada', 'New York', 'Ohio', 'Oklahoma']

export function BusinessInfoForm() {
  const { updateFormData, setStep, getNextStep } = useForm()
  const [currentStoreIndex, setCurrentStoreIndex] = useState(0)
  const [businessStores, setBusinessStores] = useState<BusinessStore[]>([{
    country: '',
    province: '',
    recreationalLicense: '',
    resellerLicense: ''
  }])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentStore = businessStores[currentStoreIndex]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStore.country !== 'USA') {
      setIsModalOpen(true)
    } else {
      submitForm()
    }
  }

  const submitForm = () => {
    updateFormData({ businessStores })
    setStep(getNextStep('business-info'))
  }

  const isNextDisabled = !currentStore.country || 
    (currentStore.country === 'USA' && !currentStore.province) || 
    !currentStore.recreationalLicense

  const updateCurrentStore = (field: keyof BusinessStore, value: string) => {
    const updatedStores = [...businessStores]
    updatedStores[currentStoreIndex] = {
      ...updatedStores[currentStoreIndex],
      [field]: value
    }
    setBusinessStores(updatedStores)
  }

  const addNewStore = () => {
    setBusinessStores([...businessStores, {
      country: '',
      province: '',
      recreationalLicense: '',
      resellerLicense: ''
    }])
    setCurrentStoreIndex(businessStores.length)
  }

  useEffect(() => {
    if (currentStore.country !== 'USA') {
      updateCurrentStore('province', '')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStore.country])

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
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select your business Country</label>
              <Select onValueChange={(value) => updateCurrentStore('country', value)} value={currentStore.country}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {currentStore.country === 'USA' && (
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Select your business Province for USA
                </label>
                <Select onValueChange={(value) => updateCurrentStore('province', value)} value={currentStore.province}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Province" />
                  </SelectTrigger>
                  <SelectContent>
                    {USA_PROVINCES.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {(currentStore.country && currentStore.country !== 'USA' || (currentStore.country === 'USA' && currentStore.province)) && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Provide your Recreational business license
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter license number"
                    required
                    value={currentStore.recreationalLicense}
                    onChange={(e) => updateCurrentStore('recreationalLicense', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Provide your Reseller business license (optional)
                  </label>
                  <Input
                    placeholder="Enter license number"
                    value={currentStore.resellerLicense}
                    onChange={(e) => updateCurrentStore('resellerLicense', e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isNextDisabled}>
            Next
          </Button>
          {(currentStore.country && currentStore.country !== 'USA' || (currentStore.country === 'USA' && currentStore.province)) && (
            <Button
              type="button"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
              onClick={addNewStore}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add More
            </Button>
          )}
        </div>
      </form>
      <AdminApprovalModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          submitForm()
        }}
      />
    </div>
  )
}

