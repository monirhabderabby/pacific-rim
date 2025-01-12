'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from '@/provider/form-provider'
import { useState } from 'react'

export function VerifyOTPForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { updateFormData, setStep } = useForm()
  
  // Store values for each input field
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));

  const handleInputChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;  // Allow only numbers
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(-1);  // Store only a single digit
    setOtpValues(newOtpValues);

    // Move focus to the next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('reset-password');
  };


  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] font-semibold text-[#6EBA6B] leading-[43.2px]">
          Verify Email
        </h1>
        <p className="text-base font-normal leading-[19.2px] text-[#444444]">
          Please enter the OTP we have sent you in your Email Address.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 !mt-[36px]">
        <div className="flex gap-x-[30px]">
          {otpValues.map((value, i) => (
            <Input
              key={i}
              id={`otp-input-${i}`}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleInputChange(e.target.value, i)}
              className={`!text-[30px] text-[#4E4E4E] !font-medium !leading-[45px] !w-[70px] !h-[90px] text-center text-xl rounded-[20px] 
              focus:outline-none focus:ring-2 focus:ring-[#2A6C2D] border-[1px] border-[#C5C5C5] 
              ${value ? "bg-[#EAF0EA]" : "bg-white"}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">

          <span className="text-base text-[#444444] font-normal leading-[19.2px]">
            Didn’t receive OTP?
          </span>
          <Button
            type="button"
            variant="link"
            className="text-[#2A6C2D]"
            onClick={() => setStep('forgot-password')}
          >
            Resend
          </Button>
        </div>
        <Button
          type="submit"
          className="w-full text-base text-[#FFFFFF] font-semibold leading-[19.2px] bg-[#2A6C2D] hover:bg-[#2A6C2D]/80 !mt-[36px]"
        >

          Verify
        </Button>
      </form>
    </div>

  );
}

