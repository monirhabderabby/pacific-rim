"use client";
import { getFromSessionStorage } from "@/lib/session-storage";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const AgeRestrictionGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const ageRestrictionValue = getFromSessionStorage("age-restriction");

    if (!ageRestrictionValue || ageRestrictionValue === "true") {
      // Redirect to "/age-alert" if restricted
      router.push("/age-alert");
    }
  }, [router]);

  return <>{children}</>;
};

export default AgeRestrictionGuard;
