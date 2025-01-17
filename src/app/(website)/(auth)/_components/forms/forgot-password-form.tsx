"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Local imports

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [loadiing, setLoading] = useState(false);
  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: ForgotPasswordSchemaType) => {
    setLoading(true);
    setTimeout(() => {
      toast.success("6 Digit Otp sent to your email", {
        position: "top-center",
        richColors: true,
      });
      setLoading(false);
    }, 3000);

    console.log("OTP Sent to your email", values);
  };

  return (
    <div className="w-full ">
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] leading-[43.2px] font-semibold text-[#6EBA6B]">
          Forgot Password?
        </h1>
        <p className="text-[#444444] text-[16px] font-normal">
          You may receive email notifications from us to reset your password for
          security and login purposes.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 mt-[36px]"
        >
          <div className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Write your email address"
                      className="h-[50px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full " disabled={loadiing}>
            {loadiing ? "Generating a 6 Digit OTP" : " Send OTP"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
