// Existing types that are still relevant
export type ExperienceType = "CBD/HEMP" | "Recreational Cannabis";

export type FormStep =
  | "country-selection" // New step for country selection
  | "state-selection" // New step for state selection (when applicable)
  | "experience"
  | "email"
  | "business-info"
  | "user-info"
  | "login"
  | "forgot-password"
  | "reset-password"
  | "verify-otp"
  | "cannabis"
  | "profession"
  | "country";

export interface BusinessLicense {
  type: "Recreational" | "CBD" | "Reseller";
  licenseNumber: string;
}

// Updated to match the new UI
export interface Country {
  name: string;
  flag: string;
  code: string;
}

// New interface for states
export interface State {
  name: string;
}

// Updated FormData to include new fields and remove unused ones
export interface FormData {
  selectedCountries: string[]; // Array of country codes
  selectedState?: string; // For US state selection
  experience?: ExperienceType;
  email?: string;
  licenses: BusinessLicense[];
  fullName?: string;
  password?: string;
  confirmPassword?: string;
  profession?: string;
  country?: string;
}

// Updated COUNTRIES constant
export const COUNTRIES: Country[] = [
  {
    name: "Costa Rica",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201597881738-9CHTnoWtJ4NADsv7dJEzJIgHzcVDmF.png",
    code: "CR",
  },
  {
    name: "United States",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20872-C8PPWOmOT2uAtULwkbnPnrqVDd0jkV.png",
    code: "US",
  },
  {
    name: "Sierra Leone",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20875-chEvjzdomIL27Fgc4cVEV6mPXIFz9E.png",
    code: "SL",
  },
  {
    name: "Solomon Islands",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20876-kHFuuvm2JKuLMzQPpbzKpM3OClm6Cs.png",
    code: "SB",
  },
  {
    name: "Paraguay",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20877-72SudVWGtMNpKf96Y6UTORkej2utzp.png",
    code: "PY",
  },
];

// New constant for US states
export const US_STATES: State[] = [
  { name: "California" },
  { name: "Arizona" },
  { name: "Texas" },
  { name: "Ohio" },
  { name: "Illinois" },
  { name: "Michigan" },
  { name: "Washington" },
  { name: "New York" },
];

// You can keep the existing BusinessStore interface if it's used elsewhere in your application
export interface BusinessStore {
  country: string;
  province?: string;
  recreationalLicense: string;
  resellerLicense?: string;
}

// Interface for CountrySelector props
export interface CountrySelectorProps {
  onNext: (selectedCountries: string[]) => void;
}
