"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

const formSchema = z
  .object({
    fullname: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    country: z.string().nonempty("Please select a country"),
    states: z.array(z.string()).optional(),
    license: z.enum(["Yes", "No"], {
      required_error: "License selection is required",
    }),
    licenseNumber: z.string().optional(),
    terms: z
      .boolean()
      .refine((val: any) => val, "You must accept the terms and conditions"),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

const SignUp = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      states: [],
      license: "No",
      licenseNumber: "",
      terms: false,
    },
  });

  const countryStates: { [key: string]: string[] } = {
    USA: ["Alaska", "Arizona", "California", "Colorado"],
    CANADA: ["Alberta", "British Columbia"],
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    Swal.fire({
      title: "Successfully Registered!",
      text: "You have been registered successfully.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="flex items-center justify-center h-auto md:px-6 lg:px-12">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white w-full max-w-6xl md:max-w-7xl">
        <div className="hidden md:block md:w-1/2 relative h-full">
          <Image
            src="/assets/img/signup.png"
            alt="Sign Up Visual"
            style={{ width: "570px", height: "100%" }}
            className="object-cover"
            fill
          />
        </div>

        <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-12 relative">
          <div className="absolute top-4 right-4 text-sm">
            Go back to{" "}
            <Link
              href="/login"
              className="font-medium text-green-600 hover:underline"
            >
              Login
            </Link>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mt-8 text-green-600">
            Create an account
          </h2>

          <Form {...form}>
            <form
              className="space-y-5 mt-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible:ring-primary-green-hover focus-visible:ring-2 ring-0"
                        placeholder="Write your full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible:ring-primary-green-hover focus-visible:ring-2 ring-0"
                        placeholder="Write your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible:ring-primary-green-hover focus-visible:ring-2 ring-0"
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible:ring-primary-green-hover focus-visible:ring-2 ring-0"
                        type="password"
                        placeholder="Confirm your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Country</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="focus-visible:ring-primary-green-hover focus-visible:ring-2 ring-0">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USA">USA</SelectItem>
                          <SelectItem value="CANADA">Canada</SelectItem>
                          <SelectItem value="THAILAND">Thailand</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {(form.watch("country") === "USA" ||
                form.watch("country") === "CANADA") && (
                <FormField
                  name="states"
                  render={() => (
                    <FormItem>
                      <FormLabel>Select States</FormLabel>
                      <div className="space-y-2">
                        {countryStates[form.watch("country")]?.map((state) => (
                          <div key={state} className="flex items-center">
                            <Checkbox
                              value={state}
                              checked={form.watch("states")?.includes(state)}
                              onCheckedChange={(checked) => {
                                const currentStates =
                                  form.watch("states") || [];
                                if (checked) {
                                  form.setValue("states", [
                                    ...currentStates,
                                    state,
                                  ]);
                                } else {
                                  form.setValue(
                                    "states",
                                    currentStates.filter((s) => s !== state)
                                  );
                                }
                              }}
                            />
                            <label className="ml-2 text-sm text-gray-700">
                              {state}
                            </label>
                          </div>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />
              )}

              <FormField
                name="license"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you have the necessary licenses?</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="focus-visible:ring-primary-green-hover focus-visible:ring-2 ring-0">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.watch("license") === "Yes" && (
                <FormField
                  name="licenseNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>License Number</FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-primary-green-hover focus-visible:ring-2 ring-0"
                          placeholder="Enter your license number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <label className="ml-2 text-sm text-gray-700">
                        I agree to the Terms and Conditions
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-8 text-center">
                <Button
                  type="submit"
                  className="w-full bg-primary-green-hover hover:bg-primary-green transition-colors h-[44px] duration-300 py-3"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-center my-6">
            <p className="text-gray-600 text-sm">or continue with</p>
            <button className="mt-3 flex items-center justify-center w-full px-6 py-3 border rounded-md hover:bg-gray-100">
              <Image
                src="/assets/img/google.jpg"
                alt="Google"
                className="w-6 h-6 mr-3"
                width={24}
                height={24}
              />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
