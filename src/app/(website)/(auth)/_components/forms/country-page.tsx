'use client'

import { useState } from 'react'
import { CountrySelector } from './country-selector'
import { StateSelector } from './state-slector'

export default function CountryPage() {
  const [countryStep, setCountryStep] = useState(1)

  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  const handleCountryNext = (countries: string[]) => {
    setSelectedCountries(countries)
    if (countries.length === 1 && countries[0] === 'US') {
        setCountryStep(2)
        console.log('Selected countries:', countries, selectedCountries)
    } else {
      console.log('Selected countries:', countries, selectedCountries)
    }
  }

//   const handleStateNext = (state: string) => {
//     // Redirect to another page with selected state
//     console.log('Selected state:', state)
//   }

  const handleBack = () => {
    setCountryStep(1)
  }

  return (
    <main className="min-h-screen bg-white">
      {countryStep === 1 ? (
        <CountrySelector onNext={handleCountryNext} />
      ) : (
        <StateSelector onBack={handleBack} />
      )}
    </main>
  )
}

