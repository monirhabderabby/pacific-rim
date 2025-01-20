"use client";

// Packages
import dynamic from "next/dynamic";
import { useState } from "react";

// Local imports
const VerifyOTPForm = dynamic(() => import("./verify-otp-form"), {
  ssr: false,
});
const ResetPasswordForm = dynamic(() => import("./reset-password-form"), {
  ssr: false,
});

const ResetPasswordContainer = () => {
  const [isOTPVerified, setIsOTPVerified] = useState<boolean>(false);
  return (
    <>
      {isOTPVerified ? (
        <ResetPasswordForm />
      ) : (
        <VerifyOTPForm onVerified={() => setIsOTPVerified(true)} />
      )}
    </>
  );
};

export default ResetPasswordContainer;
