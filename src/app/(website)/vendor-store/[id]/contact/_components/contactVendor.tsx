'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from 'lucide-react'

interface ContactFormData {
    fullName: string
    email: string
    message: string
}

function ContactVendor() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>()

    const onSubmit = async (data: ContactFormData) => {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)
        setIsSubmitted(true)
        reset()
    }

    if (isSubmitted) {
        return (
            <div className="w-full px-6">
                <Alert className="bg-green-50 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Thank you for your message!</AlertTitle>
                    <AlertDescription className="text-green-700">
                        We have received your inquiry and will get back to you soon.
                    </AlertDescription>
                </Alert>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-green-700 hover:bg-green-800 text-white"
                >
                    Send Another Message
                </Button>
            </div>
        )
    }
  return (
            <div className="w-full border-[1px] border-[#C5C5C5] rounded-2xl">
                <div className="border-b-[1px] border-[#C5C5C5]">
                    <h1 className="text-[32px] leading-[38.4px] p-[20px] font-semibold text-[#2A6C2D]">Contact Vendor</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-[20px]">
                    <div className="space-y-2">
                        <Input
                            id="fullName"
                            placeholder="Full Name"
                            {...register("fullName", {
                                required: "Full name is required",
                                pattern: {
                                    value: /^[A-Za-z]/,
                                    message: "Please enter at least first and last name"
                                }
                            })}
                            aria-invalid={errors.fullName ? "true" : "false"}
                            className="border-[#2A6C2D] h-[51px] p-[16px] placeholder:text-[16px] placeholder:text-[#444444] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Input
                            id="email"
                            placeholder="Email address"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
                            className="border-[#2A6C2D] h-[51px] p-[16px] placeholder:text-[16px] placeholder:text-[#444444] my-[10px] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Textarea
                            id="message"
                            placeholder="Message"
                            {...register("message", { required: "Message is required" })}
                            aria-invalid={errors.message ? "true" : "false"}
                            className="min-h-[150px] border-[#2A6C2D] h-[170px] p-[16px] placeholder:text-[16px] placeholder:text-[#444444] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message.message}</p>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className=" bg-[#2A6C2D] text-white w-[198px] h-[56px]"
                        >
                            {isSubmitting ? "Sending..." : "Submit Message"}
                        </Button>
                    </div>
                </form>
            </div>
  )
}

export default ContactVendor