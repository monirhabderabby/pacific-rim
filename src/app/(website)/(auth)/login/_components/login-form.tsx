"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local imports

import { SignInWithEmailAndPassword } from "@/actions/authentications/authentication";
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
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  agreed: z
    .boolean()
    .refine((val) => val, "Please agree to the terms and privacy policy"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      agreed: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    startTransition(() => {
      SignInWithEmailAndPassword(data)
        .then((res: any) => {
          if (res.success) {
            toast.success("Login successfull 🎉", {
              position: "bottom-right",
              richColors: true,
            });
          }
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "bottom-right",
            richColors: true,
          });
        });
    });
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
        <h1 className="text-[36px] leading-[43.2px] font-semibold text-gradient mb-[27px]">
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
                    className=" border-2 border-[#9E9E9E] data-[state=checked]:bg-[#00417E] data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with the{" "}
                    <Link href="#" className="text-gradient">
                      term of service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-gradient">
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
            className="w-full  p-[24px] h-[56px]"
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </Form>
      <div className="text-center">
        <div className="mt-[24px]">
          <Link
            href="/forgot-password"
            className={`text-gradient text-[16px] font-normal leading-[19.2px] ${
              isPending && "pointer-events-none"
            }`}
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-[40px]">
          <span className="text-[16px] text-[#808080]">
            Don&apos;t have an account?{" "}
          </span>
          <Link
            href="/registration"
            className={`text-gradient text-[16px] font-normal  ${
              isPending && "pointer-events-none"
            }`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
