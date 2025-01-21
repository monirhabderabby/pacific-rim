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
import FormHeader from "./form-header";

export function ExperienceForm() {
  const dispatch = useDispatch();

  const authState = useAppSelector((state) => state.auth);

  const handleExperiencChange = useCallback(
    (type: "CBD/HEMP" | "Recreational Cannabis" | "Both") => {
      dispatch(setRegistrationValue({ type }));
    },
    [dispatch]
  );

  return (
    <div className="py-[20px] md:py-0">
      <FormHeader
        label="Sign Up"
        paragraph="Continue to register as a customer or vendor, Please provide the information."
        title="What do you want to experience?"
      />
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="CBD/HEMP"
                checked={authState.type === "CBD/HEMP"}
                onCheckedChange={() => handleExperiencChange("CBD/HEMP")}
              />
              <label
                htmlFor="CBD/HEMP"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              >
                CBD/HEMP
              </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="recreational"
                checked={authState.type === "Recreational Cannabis"}
                onCheckedChange={() =>
                  handleExperiencChange("Recreational Cannabis")
                }
              />
              <label
                htmlFor="recreational"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Recreational Cannabis
              </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="recreational"
                checked={authState.type === "Both"}
                onCheckedChange={() => handleExperiencChange("Both")}
              />
              <label
                htmlFor="recreational"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Both
              </label>
            </div>
          </div>
        </div>
        <Button disabled={!authState.type} size="md">
          <Link
            href="/registration/experiences/profession"
            className="flex items-center"
          >
            Next
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default ExperienceForm;
