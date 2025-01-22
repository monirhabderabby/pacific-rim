"use client";

// Packages
import { useState } from "react";
import { useDispatch } from "react-redux";

// Local imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateBusiness } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { BusinessStore } from "@/types/form";
import Link from "next/link";

import { AddMoreButton } from "@/app/(website)/(auth)/_components/forms/button";
import { AdminApprovalModal } from "../../../../../_components/modal/admin-aproval-modal";

export function BusinessInfoForm() {
  const [currentStoreIndex, setCurrentStoreIndex] = useState(0);

  const currentBusinessInfo = useAppSelector(
    (state) => state.auth.businesses[state.auth.businesses.length - 1]
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const submitForm = () => {};

  const isNextDisabled = !currentBusinessInfo.businessLicense;

  const updateCurrentStore = (field: keyof BusinessStore, value: string) => {};

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
          <h2 className="text-2xl font-semibold">
            Provide your business information
          </h2>
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Provide your Recreational business license
              <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Enter license number"
              required
              value={currentBusinessInfo.businessLicense}
              onChange={(e) =>
                dispatch(
                  updateBusiness({
                    businessLicense: e.target.value,
                  })
                )
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Provide your Reseller business license (optional)
            </label>
            <Input
              placeholder="Enter license number"
              value={currentBusinessInfo.resellerLicense}
              onChange={(e) =>
                dispatch(
                  updateBusiness({
                    resellerLicense: e.target.value,
                  })
                )
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <NextButton />
          <div>
            <AddMoreButton />
          </div>
        </div>
      </form>
      <AdminApprovalModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          submitForm();
        }}
      />
    </div>
  );
}

const NextButton = () => {
  return (
    <Button disabled={false} className="min-w-[155px]">
      <Link href="">Next →</Link>
    </Button>
  );
};
