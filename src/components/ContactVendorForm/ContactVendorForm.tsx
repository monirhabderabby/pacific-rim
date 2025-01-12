'use client'
// package import 
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CheckCircle2 } from 'lucide-react'
// local import 

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


interface ContactFormData {
    fullName: string
    email: string
    message: string
}


function ContactVendorForm() {
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
            <div className="w-full max-w-xl mx-auto p-6">
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
        <div className="container">
            <div className="w-full max-w-xl mx-auto border-[1px] border-[#C5C5C5] rounded-2xl">
                <div className="border-b-[1px] border-[#E6E6E6]">
                    <h1 className="text-[32px] leading-[38.4px] p-6 font-semibold text-[#2A6C2D]">Contact Vendor</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
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
                            className="border-[#2A6C2D] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
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
                            className="border-[#2A6C2D] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Message"
                            {...register("message", { required: "Message is required" })}
                            aria-invalid={errors.message ? "true" : "false"}
                            className="min-h-[150px] border-[#2A6C2D] focus-visible:ring-0 focus-visible:ring-offset-0"
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
        </div>
    )
}

export default ContactVendorForm