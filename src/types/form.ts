export type FormStep = 
  | 'login'
  | 'forgot-password'
  | 'verify-otp'
  | 'reset-password'
  | 'experience'
  | 'business-info'
  | 'user-info';

export interface Country {
  name: string;
  provinces: string[];
}

export interface BusinessLicense {
  type: 'CBD' | 'Reseller';
  licenseNumber: string;
}

export interface FormData {
  email: string;
  password: string;
  fullName?: string;
  confirmPassword?: string;
  experience?: 'CBD/HEMP' | 'Recreational Cannabis';
  country?: string;
  province?: string;
  licenses?: BusinessLicense[];
  otp?: string;
}

