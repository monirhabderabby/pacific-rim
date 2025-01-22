"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local Imports
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
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import FormHeader from "./form-header";

// Zod Schema for validation
const formSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Error will appear on the `confirmPassword` field
    message: "Passwords must match",
  });

export type UserInformationFormType = z.infer<typeof formSchema>;

export default function UserInformationForm() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: authState.email,
      fullName: authState.fullName,
      password: authState.password,
      confirmPassword: authState.password,
    },
  });

  const { watch } = form;
  const isDisable =
    !watch("email") ||
    !watch("fullName") ||
    !watch("password") ||
    !watch("confirmPassword");

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
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
      className="py-[20px] md:py-0"
    >
      <FormHeader
        label="Sign Up"
        paragraph="Continue to register as a customer or vendor, Please provide the information."
        title="Enter your Personal Information"
      />

      <Form {...form}>
        <form className="flex flex-col gap-[20px] text-[20px]">
          {/* Email Field */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]"
                    placeholder="Write your email"
                    onChange={(e) => {
                      dispatch(
                        setRegistrationValue({
                          email: e.target.value,
                        })
                      );
                      field.onChange(e.target.value);
                    }}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Full Name Field */}
          <FormField
            name="fullName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]"
                    placeholder="Write your full name"
                    onChange={(e) => {
                      dispatch(
                        setRegistrationValue({
                          fullName: e.target.value,
                        })
                      );
                      field.onChange(e.target.value);
                    }}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]"
                      type={passwordVisibility.password ? "text" : "password"}
                      placeholder="Enter your password"
                      onChange={(e) => {
                        dispatch(
                          setRegistrationValue({
                            password: e.target.value,
                          })
                        );

                        field.onChange(e.target.value);
                      }}
                      value={field.value}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => togglePasswordVisibility("password")}
                    >
                      {!passwordVisibility.password ? (
                        <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="p-5 text-[20px] focus:outline-none focus:ring-2 focus:ring-[#9E9E9E]"
                      type={
                        passwordVisibility.confirmPassword ? "text" : "password"
                      }
                      placeholder="Confirm your password"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    >
                      {!passwordVisibility.confirmPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-[40px]">
            <Button disabled={isDisable} size="md" type="submit" asChild>
              <Link
                href="/registration/experiences"
                className="flex items-center"
              >
                Next
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
