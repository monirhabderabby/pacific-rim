"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local imports

import NextButton from "@/app/(website)/(auth)/_components/forms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

// Define Zod schema for email validation
const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type EmailSchemaType = z.infer<typeof emailSchema>;

export function EmailForm() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

  console.log(authState);

  // Use React Hook Form with Zod resolver
  const form = useForm<EmailSchemaType>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const handleSubmit = (data: EmailSchemaType) => {
    // Dispatch email to Redux store
    dispatch(
      setRegistrationValue({
        email: data.email,
      })
    );

    // Proceed to the next step
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
      className="space-y-[40px]"
    >
      <div className="space-y-[18px] text-center">
        <h1 className="text-[36px]  leading-[43.2px] font-semibold text-green-600">
          Sign Up
        </h1>
        <p className="text-[#6D6D6D] text-[12px] font-normal leading-[14.4px]">
          Continue to register as a customer or vendor. Please provide the
          information.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-[25px] md:text-[32px] leading-[38.4px] font-medium">
              Enter your email address
            </h2>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#444444]">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <NextButton />
        </form>
      </Form>
    </motion.div>
  );
}
