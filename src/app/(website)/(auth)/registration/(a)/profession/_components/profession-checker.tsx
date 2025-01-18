"use client";

// Packages
import { useDispatch } from "react-redux";

// Local imports

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function ProfessionChecker() {
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);

  let nextPath: string;

  nextPath =
    authState?.type === "Recreational Cannabis"
      ? "/registration/profession/email"
      : "";

  nextPath =
    authState.type === "CBD/HEMP" ? "/registration/profession/country" : "";

  const selectedProfessions: string[] = authState.profession;

  const handleProfessionChange = (currentProfession: string) => {
    const updatedProfessions = selectedProfessions.includes(currentProfession)
      ? selectedProfessions.filter(
          (profession) => profession !== currentProfession
        ) // Remove if already selected
      : [...selectedProfessions, currentProfession]; // Add if not already selected

    // Dispatch the updated profession list
    dispatch(setRegistrationValue({ profession: updatedProfessions }));
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

          <div>
            <Button
              disabled={selectedProfessions.length === 0}
              size="md"
              asChild
            >
              <Link href={nextPath} className="flex items-center">
                Next
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
