"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local imports

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  agreed: z
    .boolean()
    .refine((val) => val, "Please agree to the terms and privacy policy"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      agreed: false,
    },
  });

  const delayingForTestingPerpuse = (type: "success" | "failed") => {
    setTimeout(() => {
      if (type === "success") {
        toast.success("successfully logged in.");
      } else if (type === "failed") {
        toast.error("Failed to login");
      }

      setLoading(false);
    }, 3000);
  };

  const onSubmit = (data: LoginFormValues) => {
    setLoading(true);
    const { email, password } = data;
    if (email === "user@example.com" && password === "password123") {
      delayingForTestingPerpuse("success");
    } else {
      form.setError("password", {
        message: "Invalid email or password combination",
      });

      delayingForTestingPerpuse("failed");
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] leading-[43.2px] font-semibold text-[#6EBA6B] mb-[27px]">
          Log In
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal leading-[19.2px] text-[#444444]">
                  Username or Email<span className="text-[#E70F0F]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write your user name or email"
                    className="border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal leading-[19.2px] text-[#444444]">
                  Password<span className="text-[#E70F0F]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Write your password"
                    className="border-[1px] border-[#9E9E9E] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9E9E9E] text-black font-normal text-[16px] leading-[19.2px] p-[16px] h-[51px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="agreed"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2 text-[#9E9E9E]">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className=" border-2 border-[#9E9E9E] data-[state=checked]:bg-[#2A6C2D] data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with the{" "}
                    <Link href="#" className="text-[#4CAF50]">
                      term of service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-[#4CAF50]">
                      privacy policy
                    </Link>
                  </label>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#2A6C2D] p-[24px] h-[56px]"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <div>
          <button
            className="text-[#2A6C2D] text-[16px] font-normal leading-[19.2px] my-[20px]"
            onClick={() => console.log("Forgot Password clicked")} // Replace with actual logic
          >
            Forgot Password?
          </button>
        </div>
        <span className="text-[16px] text-[#808080]">
          Don&apos;t have an account?{" "}
        </span>
        <Link href="#" className="text-[#2A6C2D] text-[16px] font-normal">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
