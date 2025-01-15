"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "@/provider/form-provider";
import { useState } from "react";
import NextButton from "./button";

interface Profession {
  id: string;
  label: string;
}

const professions: Profession[] = [
  { id: "cultivator", label: "Cultivator" },
  { id: "distributor", label: "Distributor" },
  { id: "extractor", label: "Extractor" },
  { id: "processor", label: "Processor" },
  { id: "dispensary", label: "Dispensary" },
];

export default function CheckProfession() {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const { setStep, getNextStep } = useForm();

  const handleProfessionChange = (professionId: string) => {
    setSelectedProfessions((current) => {
      if (current.includes(professionId)) {
        return current.filter((id) => id !== professionId);
      }
      return [...current, professionId];
    });
  };

  return (
    <div className="bg-background">
      <div className=" px-4 py-6 mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-green-600">
              Sign Up
            </h1>
            <p className="text-muted-foreground">
              Continue to register as a customer or vendor. Please provide the
              information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Who you are?
            </h2>
            <div className="grid gap-4">
              {professions.map((profession) => (
                <div
                  key={profession.id}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={profession.id}
                    checked={selectedProfessions.includes(profession.id)}
                    onCheckedChange={() =>
                      handleProfessionChange(profession.id)
                    }
                  />
                  <label
                    htmlFor={profession.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {profession.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div onClick={() => setStep(getNextStep("profession"))}>
            <NextButton disable={selectedProfessions.length === 0} />
          </div>
        </div>
      </div>
    </div>
  );
}
