"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^[0-9]+$/, "OTP must contain only numbers"),
});

type OTPSchemaType = z.infer<typeof otpSchema>;

interface VerifyOTPFormProps {
  onVerified: () => void;
}

export function VerifyOTPForm({ onVerified }: VerifyOTPFormProps) {
  const [loading, setLoading] = useState(false);
  const correctOtp = "123456"; // Correct OTP for validation when we get otp from backend its dynamic

  const form = useForm<OTPSchemaType>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleSubmit = (values: OTPSchemaType) => {
    setLoading(true);
    setTimeout(() => {
      if (values.otp !== correctOtp) {
        form.setError("otp", { message: "Incorrect OTP" });
      } else {
        toast.success("OTP Verified  🎉", {
          position: "top-center",
          richColors: true,
        });
        onVerified();
      }

      setLoading(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="w-full"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] font-semibold text-gradient leading-[43.2px]">
          Verify Email
        </h1>
        {form.formState.errors.otp ? (
          <p className="text-base font-normal leading-[19.2px] text-[#E10E0E]">
            {form.formState.errors.otp.message}
          </p>
        ) : (
          <p className="text-base font-normal leading-[19.2px] text-[#444444]">
            Please enter the OTP we have sent you in your Email Address.
          </p>
        )}
      </div>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 !mt-[36px]"
      >
        <div className="flex justify-between">
          {[...Array(6)].map((_, i) => (
            <Input
              key={i}
              id={`otp-input-${i}`}
              type="text"
              maxLength={1}
              value={form.watch("otp")[i] || ""}
              onChange={(e) => {
                form.clearErrors("otp");
                const value = e.target.value;
                if (!/^[0-9]*$/.test(value)) return;

                const currentOtp = form.getValues("otp");
                const updatedOtp =
                  currentOtp.substring(0, i) +
                  value.slice(-1) +
                  currentOtp.substring(i + 1);

                form.setValue("otp", updatedOtp);

                // Move focus to the next input
                if (value && i < 5) {
                  const nextInput = document.getElementById(
                    `otp-input-${i + 1}`
                  );
                  if (nextInput) (nextInput as HTMLInputElement).focus();
                }
              }}
              onKeyDown={(e) => {
                // Handle Backspace key to focus on the previous input
                if (e.key === "Backspace" && !form.watch("otp")[i] && i > 0) {
                  const prevInput = document.getElementById(
                    `otp-input-${i - 1}`
                  );
                  if (prevInput) {
                    (prevInput as HTMLInputElement).focus();
                    const currentOtp = form.getValues("otp");
                    const updatedOtp =
                      currentOtp.substring(0, i - 1) +
                      " " + // Clear the previous input value if needed
                      currentOtp.substring(i);
                    form.setValue("otp", updatedOtp.trim());
                  }
                }
              }}
              className={`!text-[30px] text-[#4E4E4E] !font-medium !leading-[45px] w-[43.83px] 
              lg:w-[70px] h-[70px] lg:h-[90px] text-center text-xl rounded-[12px] lg:rounded-[20px] 
              focus:outline-none focus:ring-2 focus:ring-[#2A6C2D] border-[1px] 
              ${
                form.formState.errors.otp
                  ? "bg-red-200/50 border-red-500/50"
                  : form.watch("otp")[i]
                  ? "border-gray-200 bg-transparent"
                  : "border-gray-200 bg-white"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-base text-[#444444] font-normal leading-[19.2px]">
            Didn’t receive OTP?
          </span>
          <Button
            type="button"
            variant="link"
            className="text-gradient text-base font-normal leading-[19.2px]"
            onClick={() => {}}
          >
            Resend
          </Button>
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Wait a second..." : "Verify"}
        </Button>
      </form>
    </motion.div>
  );
}

export default VerifyOTPForm;
