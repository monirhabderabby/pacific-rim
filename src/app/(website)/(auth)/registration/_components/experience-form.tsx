"use client";
// Packages
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

// Local imports
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import NextButton from "../../_components/forms/button";

export function ExperienceForm() {
  const dispatch = useDispatch();

  const { type } = useAppSelector((state) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type) {
      toast.warning("Please select at least one experience!", {
        position: "top-center",
        richColors: true,
      });
      return;
    }

    console.log("submit");
  };

  const handleRadioChange = useCallback(
    (value: string) => {
      dispatch(setRegistrationValue({ type: value }));
    },
    [dispatch]
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl  font-semibold text-[#6EBA6B]">Sign Up</h1>
        <p className="text-gray-500 text-xs">
          Continue to register as a customer or vendor, Please provide the
          information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className=" text-[32px] font-medium">
            What do you want to experience?
          </h2>
          <RadioGroup onValueChange={handleRadioChange} className="space-y-3">
            <div className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="CBD/HEMP" id="cbd" />
              <Label htmlFor="cbd" className="cursor-pointer">
                CBD/HEMP
              </Label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="Recreational Cannabis" id="recreational" />
              <Label htmlFor="recreational" className="cursor-pointer">
                Recreational Cannabis
              </Label>
            </div>
          </RadioGroup>
        </div>
        <NextButton disable={!type} />
      </form>
    </div>
  );
}

export default ExperienceForm;
