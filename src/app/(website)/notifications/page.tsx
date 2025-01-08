'use client'

import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from 'lucide-react'
import Image from "next/image"
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading'

interface Notification {
    id: string
    message: string
    date: string
}


function Page() {
    const [notifications2026, setNotifications2026] = useState<Notification[]>(
        Array(4).fill(null).map((_, i) => ({
            id: `2026-${i}`,
            message: "New products from American beauty stores have been released.",
            date: "March 1, 2026"
        }))
    )

    const [notifications2023, setNotifications2023] = useState<Notification[]>(
        Array(3).fill(null).map((_, i) => ({
            id: `2023-${i}`,
            message: "New products from American beauty stores have been released.",
            date: "March 1, 2023"
        }))
    )

    const removeNotification = (id: string, year: 2026 | 2023) => {
        if (year === 2026) {
            setNotifications2026(notifications2026.filter(notification => notification.id !== id))
        } else {
            setNotifications2023(notifications2023.filter(notification => notification.id !== id))
        }
    }

    const renderNotifications = (notifications: Notification[], year: 2026 | 2023) => (
        <div className="space-y-2">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className="flex lg:items-center justify-between py-4 border-b border-gray-300"
                >
                    <div className="flex items-center gap-4">
                        <div className="">
                            <Image
                                src="/assets/img/notification.png"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="rounded-full w-24 h-12 lg:w-10 lg:h-10"
                            />
                        </div>
                        <span className="text-base lg:text-xl text-[#4D4D4D]">{notification.message}</span>
                    </div>
                    <div className="flex items-center justify-end flex-wrap-reverse gap-4">
                        <span className="text-nowrap text-xs lg:text-base text-[#4D4D4D]">{notification.date}</span>
                        <button
                            onClick={() => removeNotification(notification.id, year)}
                            className="hover:text-red-400 transition-colors w-[20px] h-[20px]"
                            aria-label="Close notification"
                        >
                            <X className='text-[#000000]' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )


    return (
        <div className="section">
            <div className="text-center mb-12">
                <div className="font-bold">
                    <h3 className="text-2xl lg:text-4xl text-primary-green-hover">Notifications</h3>
                    <div className="mt-[-10px]">
                        <SectionHeading heading={""} subheading={""} />
                    </div>
                </div>
            </div>
            <div className="container">
                <ScrollArea className="">
                    <div className="">
                        <h1 className="text-[25px] text-black font-bold  mb-2">New</h1>
                        {renderNotifications(notifications2026, 2026)}
                        <h1 className="text-[25px] mt-8 mb-2 text-black font-bold">Earlier</h1>
                        {renderNotifications(notifications2023, 2023)}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default Page