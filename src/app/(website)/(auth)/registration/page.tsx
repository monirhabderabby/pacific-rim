"use client";
import { FormProvider } from "@/provider/form-provider";
import { MultiStepForm } from "../_components/multi-step-form";

export default function Page() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}
