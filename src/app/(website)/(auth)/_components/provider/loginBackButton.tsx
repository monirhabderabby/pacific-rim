"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginBackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-gray-500 hover:text-gray-700"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </button>
  );
};

export default LoginBackButton;
