"use client";

import { useForm } from "@/provider/form-provider";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { ForgotPasswordForm } from "../forgot-password/_components/forgot-password-form";
import { LoginForm } from "../login/_components/login-form";
import CheckProfession from "../registration/(a)/experiences/profession/_components/profession-checker";
import { EmailForm } from "../registration/(a)/experiences/profession/email/_components/email-form";
import { ExperienceForm } from "../registration/_components/experience-form";
import SignUpForm from "../registration/_components/UserInfoSignUp";
import { BusinessInfoForm } from "../registration/country/[state]/business_information/_components/business-info-form";
import { ResetPasswordForm } from "../reset-password/_componments/reset-password-form";
import { VerifyOTPForm } from "../reset-password/_componments/verify-otp-form";
import CountryPage from "./forms/country-page";
import { RecreationalCannabis } from "./forms/recreational-cannabis";

export function MultiStepForm() {
  const { step, setStep, getPrevStep } = useForm();

  const renderStep = () => {
    switch (step) {
      case "login":
        return <LoginForm />;
      case "forgot-password":
        return <ForgotPasswordForm />;
      case "verify-otp":
        return <VerifyOTPForm onVerified={() => {}} />;
      case "reset-password":
        return <ResetPasswordForm />;
      case "experience":
        return <ExperienceForm />;
      case "profession":
        return <CheckProfession />;
      case "email":
        return <EmailForm />;
      case "user-info":
        return <SignUpForm />;
      case "cannabis":
        return <RecreationalCannabis />;
      case "business-info":
        return <BusinessInfoForm />;
      case "country":
        return <CountryPage />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <div className="min-h-screen mb-[100px]">
      <div className="mx-auto container px-4 py-8">
        <div className="relative rounded-lg ">
          <div className="flex items-center justify-between py-4 md:mb-[90px]">
            <div className="flex items-cente gap-1">
              <Image
                src="/assets/img/logo.png"
                alt="Pacific Rim Fusion"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold text-[10px] leading-[12px]">
                Pacific <br /> Rim <br /> Fusion
              </span>
            </div>
            {step !== "experience" && (
              <button
                onClick={() => setStep(getPrevStep(step))}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </button>
            )}
          </div>
          <div className="grid h-[600px] md:grid-cols-2">
            <div className="relative hidden md:block">
              <Image
                src="/assets/img/signup.png"
                alt="CBD Products"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-l-lg object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="md:p-8 flex flex-col justify-center">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
