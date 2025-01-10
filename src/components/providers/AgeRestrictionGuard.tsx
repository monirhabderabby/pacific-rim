"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AgeRestrictionGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const ageRestrictionValue = sessionStorage.getItem("age-restriction");

    if (!ageRestrictionValue || ageRestrictionValue === "true") {
      // Redirect to "/age-alert" if restricted
      router.push("/age-alert");
    }
  }, [router]);

  return <>{children}</>;
};

export default AgeRestrictionGuard;
