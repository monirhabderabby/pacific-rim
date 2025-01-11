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
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string(),
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  country: z.string(),
  city: z.string(),
  street: z.string(),
});

export default function ProfileSettingsForm() {
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-x-[30px] flex justify-between items-center"
      >
        <div className="max-w-[554px] space-y-[24px] flex-grow">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Cameron Williamson"
                    type=""
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="@cameronwilliamson"
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="georgia.young@example.com"
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="(+33)7 75 55 65 33"
                    type="text"
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="USA"
                    type="text"
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Town/City
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Arizona"
                    type="text"
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-normal text-[#000000]">
                  Street Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                    type="text"
                    className="h-[50px] border-[1px] border-[#C5C5C5] focus-visible:ring-primary-green-hover rounded-[8px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            Save Changes
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <Image
            src="https://www.monirhrabby.info/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.fe6e329e.jpg&w=256&q=95"
            alt="profile"
            height={160}
            width={160}
            className="rounded-full"
          />
          <Button variant="outline" size="sm" type="button">
            Change Image
          </Button>
        </div>
      </form>
    </Form>
  );
}
