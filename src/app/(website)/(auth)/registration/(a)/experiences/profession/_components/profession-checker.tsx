"use client";

// Packages
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

// Local imports

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import FormHeader from "../../../../_components/form-header";

interface Profession {
  id: string;
  label: string;
}

const professions: Profession[] = [
  { id: "farmmer", label: "Farmer" },
  { id: "cultivator", label: "Cultivator" },
  { id: "processor", label: "Processor" },

  { id: "extractor", label: "Extractor" },
  { id: "distributor", label: "Distributor" },

  { id: "dispensary", label: "Dispensary" },
];

export default function ProfessionChecker() {
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);

  // check if prev form value not found
  const { type } = authState;

  // if prev state value not found then start from first

  if (!type) {
    redirect("/registration");
  }

  const selectedProfessions: string[] = authState.profession;

  const handleProfessionChange = useCallback(
    (currentProfession: string) => {
      const updatedProfessions = new Set(selectedProfessions);
      if (updatedProfessions.has(currentProfession)) {
        updatedProfessions.delete(currentProfession);
      } else {
        updatedProfessions.add(currentProfession);
      }
      dispatch(
        setRegistrationValue({ profession: Array.from(updatedProfessions) })
      );
    },
    [selectedProfessions, dispatch]
  );

  return (
    <div className="py-[20px] md:py-0">
      <div>
        <div>
          <FormHeader
            label="Sign Up"
            paragraph="Continue to register as a customer or vendor, Please provide the information."
            title="What do you want to experience?"
          />

          <div className="space-y-4">
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

          <div className="pt-[40px]">
            <Button
              disabled={selectedProfessions.length === 0}
              size="md"
              asChild
            >
              <Link href="/registration/country" className="flex items-center">
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
