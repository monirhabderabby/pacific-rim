"use client";
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
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  currentPassoword: z.string(),
  newPassword: z.string(),
  confirmNewPassword: z.string(),
});

export default function PasswordSettingsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[24px]">
        <FormField
          control={form.control}
          name="currentPassoword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px] font-normal text-[#000000]">
                Current Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your new password"
                  type="text"
                  {...field}
                  className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-[30px]">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  New Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your new password"
                    {...field}
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Confirm New Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your confirm new password"
                    {...field}
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  );
}
