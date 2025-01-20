"use client";

import { Flag } from "@/app/(website)/(auth)/_components/forms/flag";
import { Country, CountrySelectorProps } from "@/types/form";
import Image from "next/image";
import { useState } from "react";
// import { useForm } from '@/provider/form-provider'

import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useDispatch } from "react-redux";

const countries: Country[] = [
  { name: "Costa Rica", flag: "/assets/img/Frame 1597881738.png", code: "CR" },
  { name: "United States", flag: "/assets/img/image 872.png", code: "US" },
  { name: "Sierra Leone", flag: "/assets/img/image 875.png", code: "SL" },
  { name: "Solomon Islands", flag: "/assets/img/image 876.png", code: "SB" },
  { name: "Paraguay", flag: "/assets/img/image 877.png", code: "PY" },
];

export function CountrySelectorOld({ onNext }: CountrySelectorProps) {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const dispatch = useDispatch();

  // const {setStep} = useForm()

  const toggleCountry = (countryCode: string) => {
    setSelectedCountries((prev) =>
      prev.includes(countryCode)
        ? prev.filter((code) => code !== countryCode)
        : [...prev, countryCode]
    );
  };

  const handleCountry = () => {
    onNext(selectedCountries);
    dispatch(setRegistrationValue({ country: selectedCountries }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-semibold text-center mb-2 text-[#37B24D]">
        Select Any Country
      </h1>
      <p className="text-gray-500 mb-8">Choose Your Business Country</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {countries.map((country) => (
          <Flag
            key={country.code}
            src={country.flag}
            alt={country.name}
            selected={selectedCountries.includes(country.code)}
            onClick={() => toggleCountry(country.code)}
          />
        ))}
      </div>

      <div className="w-full max-w-4xl mb-8">
        <Image
          src="/assets/img/Frame 1597881753.png"
          alt="World Map"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <div className="flex justify-center gap-6 mt-4">
          <LegendItem color="black" label="Recreational Cannabis" />
          <LegendItem color="#37B24D" label="CBD/HEMP" />
          <LegendItem color="gray" label="Not available" />
        </div>
      </div>

      <button
        onClick={handleCountry}
        disabled={selectedCountries.length === 0}
        className="bg-[#37B24D] text-white px-8 py-2 rounded-md hover:bg-[#2f9641] transition-colors ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next →
      </button>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center">
      <div
        className={`w-3 h-3 rounded-full mr-2`}
        style={{ backgroundColor: color }}
      />
      <span className="text-sm">{label}</span>
    </div>
  );
}
