"use client";

// Packages
import { useState } from "react";
import { useDispatch } from "react-redux";

// Local imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  resetAuthSlice,
  updateBusiness,
} from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";

import { Plus } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { toast } from "sonner";
import { AdminApprovalModal } from "../../../../../_components/modal/admin-aproval-modal";
import FormHeader from "../../../../_components/form-header";

export function BusinessInfoForm() {
  const authState = useAppSelector((state) => state.auth);

  const currentBusinessInfo = authState.businesses[
    authState.businesses.length - 1
  ] || {
    ...authState.businesses[authState.businesses.length - 1],
    businessLicense: "",
    resellerLicense: "",
  };

  const isRecreational = authState.type === "Recreational Cannabis";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const submitForm = () => {
    console.log(authState);
    if (isRecreational) {
      setIsModalOpen(true);
    } else {
      // Code you business logic here...

      toast.success("Your account is ready! ");

      setTimeout(() => {
        router.push("/login");
      }, 500);
    }

    dispatch(resetAuthSlice());
  };

  const isNextDisabled = !currentBusinessInfo?.businessLicense;

  return (
    <div className="space-y-6">
      <FormHeader
        label="Sign Up"
        paragraph="Continue to register as a customer or vendor, Please provide the information."
        title="Select your business information"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="flex items-center justify-between pt-[40px]">
          <Button
            disabled={isNextDisabled}
            className="min-w-[155px]"
            type="submit"
            onClick={submitForm}
          >
            Next →
          </Button>
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

export default BusinessInfoForm;

const AddMoreButton = () => {
  return (
    <Button variant="outline">
      <Link href="/registration/country" className="flex items-center">
        Add More <Plus className="ml-2" />
      </Link>
    </Button>
  );
};
