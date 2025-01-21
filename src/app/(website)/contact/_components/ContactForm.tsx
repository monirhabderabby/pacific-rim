"use client";

// package import 
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// local import

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Define Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Queries is required"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema), // Use Zod resolver for validation
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);

    // Optionally reset the form
    form.reset();
  };

  return (
    <div className="flex flex-col grow p-[20px] max-w-[670px] bg-[#E6EEF6] rounded-2xl min-h-[648px] max-md:mt-8 max-md:max-w-full gap-[24px]">
      <div className="flex flex-col gap-[8px] w-full max-md:max-w-full">
        <h1 className="text-[25px] lg:text-[32px] font-semibold leading-[38.4px] text-gradiend max-md:max-w-full">
          We are Here to Help!
        </h1>
        <div >
          <p className="text-[16px] leading-[19.2px] text-[#444444] max-md:max-w-full">For inquiries, partnerships, or additional information about how
          Pacific Rim Fusion can help your local business, please reach out
          through our support channel..
          <br />
          <br />
          Together, we can build a more equitable and prosperous cannabis
          industry.</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 w-full  max-md:max-w-full">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name*" {...field} className="w-full h-[51px] p-[16px] text-black text-[16px] bg-white border-[#0057A8] rounded-md placeholder:text-[16px] placeholder:text-[#444444] focus-visible:ring-0 focus-visible:ring-offset-0"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <div className="mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Address*" {...field} className="w-full h-[51px] p-[16px]text-black text-[16px] bg-white border-[#0057A8] rounded-md placeholder:text-[16px] placeholder:text-[#444444] focus-visible:ring-0 focus-visible:ring-offset-0"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Subject Field */}
          <div className="mt-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Subject" {...field} className="w-full h-[51px] p-[16px]text-black text-[16px] bg-white border-[#0057A8] rounded-md placeholder:text-[16px] placeholder:text-[#444444] focus-visible:ring-0 focus-visible:ring-offset-0"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Message Field */}
          <div className="mt-4">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Ask your Queries*" {...field} className="w-full p-[16px]text-black text-[16px] bg-white border-[#0057A8] rounded-md placeholder:text-[16px] placeholder:text-[#444444] h-[170px] focus-visible:ring-0 focus-visible:ring-offset-0"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="self-center max-w-full font-semibold whitespace-nowrap mt-[16px]  rounded-lg min-h-[56px] w-[198px] max-md:px-5 transition-colors duration-200"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
