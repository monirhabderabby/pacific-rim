"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "@/provider/form-provider";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import NextButton from "./button";

export function EmailForm() {
  const { setStep, getNextStep } = useForm();
  const dispatch = useDispatch();

  const val = useSelector((state: any) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStep(getNextStep("email"));
  };

  const handleEmailChange = (email: string) => {
    dispatch(
      setRegistrationValue({
        email,
      })
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-green-600">Sign Up</h1>
        <p className="text-gray-500">
          Continue to register as a customer or vendor, Please provide the
          information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Enter your email address</h2>
          <Input
            placeholder="Write your email"
            type="email"
            required
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </div>
        <NextButton />
      </form>
    </div>
  );
}
