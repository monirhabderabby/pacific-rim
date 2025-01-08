"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
    <div className="flex flex-col grow p-5 max-w-[670px] bg-[#EAF0EA] rounded-2xl min-h-[648px] max-md:mt-8 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h1 className="text-3xl font-semibold leading-tight text-green-800 max-md:max-w-full">
          We are Here to Help!
        </h1>
        <div className="mt-2 text-base leading-5 text-neutral-700 max-md:max-w-full">
          For inquiries, partnerships, or additional information about how
          Pacific Rim Fusion can help your local business, please reach out
          through our support channel.
          <br />
          <br />
          Together, we can build a more equitable and prosperous cannabis
          industry.
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 mt-6 w-full text-base leading-tight text-neutral-700 max-md:max-w-full">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name*" {...field} className="w-full h-[51px] p-2 bg-white border-[#2A6C2D] rounded-md"/>
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
                    <Input placeholder="Email Address*" {...field} className="w-full h-[51px] p-2 bg-white border-[#2A6C2D] rounded-md"/>
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
                    <Input placeholder="Subject" {...field} className="w-full h-[51px] p-2 bg-white border-[#2A6C2D] rounded-md"/>
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
                    <Textarea placeholder="Ask your Queries*" {...field} className="w-full p-2 bg-white border-[#2A6C2D] rounded-md h-48"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="gap-2.5 self-center px-6 py-5 mt-4 max-w-full font-semibold text-white whitespace-nowrap bg-primary-green hover:bg-primary-green-hover rounded-lg min-h-[56px] w-[198px] max-md:px-5 transition-colors duration-200"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
