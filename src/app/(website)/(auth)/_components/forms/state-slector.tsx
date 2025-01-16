'use client'

import Image from 'next/image'
import { useState } from 'react'
import { StateSelectorProps, State } from '@/types/form'
import { useForm } from '@/provider/form-provider'
import { setRegistrationValue } from '@/redux/features/authentication/AuthSlice'
import { useDispatch } from 'react-redux'

const states: State[] = [
  { name: 'California' },
  { name: 'Arizona' },
  { name: 'Texas' },
  { name: 'Ohio' },
  { name: 'Illinois' },
  { name: 'Michigan' },
  { name: 'Washington' },
  { name: 'New York' },
]

export function StateSelector({  onBack }: StateSelectorProps) {
  const [selectedState, setSelectedState] = useState<string>('')

  const dispatch = useDispatch()

  const { setStep } = useForm()

  const handleClick = () => {
    // onNext(selectedState)
    setStep("business-info");
    dispatch(setRegistrationValue({ state: selectedState }));
  }
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-semibold text-center mb-2 text-[#37B24D]">
        Select Any State Of USA
      </h1>
      <p className="text-gray-500 mb-8">Choose Your Business State</p>

      <div className="mb-8">
        <Image
          src="/assets/img/image 872.png"
          alt="USA Flag"
          width={300}
          height={180}
          className="rounded-lg"
        />
      </div>

      <div className="flex gap-4 flex-wrap py-4">
        {states.map((state) => (
          <button
            key={state.name}
            onClick={() => setSelectedState(state.name)}
            className={`p-3 border rounded-md transition-colors text-lg font-medium leading-3 ${
              selectedState === state.name 
                ? 'border-[#37B24D] bg-[#37B24D] text-white' 
                : 'border-gray-200 hover:border-[#37B24D] hover:text-[#4737b2]'
            }`}
          >
            {state.name}
          </button>
        ))}
      </div>

      <div className="flex justify-between w-full">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-8 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={handleClick}
          disabled={!selectedState}
          className="bg-[#37B24D] text-white px-8 py-2 rounded-md hover:bg-[#2f9641] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

