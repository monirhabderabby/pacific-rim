"use client";

// Package imports
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AgeRestrictionGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const ageRestrictionValue = sessionStorage.getItem("age-restriction");

    if (!ageRestrictionValue || ageRestrictionValue === "true") {
      // Get the current pathname to use as the redirect target
      const currentPath = window.location.pathname;

      // Redirect to "/age-alert" with the redirect query parameter
      router.push(`/age-alert?redirect=${encodeURIComponent(currentPath)}`);
    }
  }, [router]);

  return <>{children}</>;
};

export default AgeRestrictionGuard;
