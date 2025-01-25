"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const session = useSession();

  if (!session) redirect("/login");
  return (
    <div className="h-[700px] w-full flex justify-center items-center">
      <Button
        onClick={() =>
          signOut({
            redirectTo: "/",
          })
        }
      >
        Logout
      </Button>
    </div>
  );
};

export default Page;
