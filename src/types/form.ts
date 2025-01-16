export type ExperienceType = "CBD/HEMP" | "Recreational Cannabis";

export type FormStep =
  | "experience"
  | "email"
  | "business-info"
  | "user-info"
  | "login"
  | "forgot-password"
  | "reset-password"
  | "verify-otp"
  | "cannabis"
  | "profession";

export interface BusinessLicense {
  type: "Recreational" | "CBD" | "Reseller";
  licenseNumber: string;
}

export interface BusinessStore {
  country: string;
  province?: string;
  recreationalLicense: string;
  resellerLicense?: string;
}

export interface FormData {
  experience?: ExperienceType;
  email?: string;
  country?: string;
  province?: string;
  licenses: BusinessLicense[];
  fullName?: string;
  password?: string;
  confirmPassword?: string;
  profession?: string;
  businessStores?: any;
}

export interface Country {
  name: string;
  provinces: string[];
}

export const COUNTRIES: Country[] = [
  {
    name: "USA",
    provinces: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Nevada",
      "New York",
      "Ohio",
      "Oklahoma",
    ],
  },
  {
    name: "Canada",
    provinces: ["Ontario", "Quebec", "British Columbia"],
  },
  {
    name: "Mexico",
    provinces: ["Jalisco", "Nuevo León", "Yucatán"],
  },
];
