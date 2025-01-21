'use client'
// package import 
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from "framer-motion"

// local import 

import { ScrollArea } from "@/components/ui/scroll-area"
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading'
import { PageHeader } from '@/components/shared/sections/page-header'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

interface Notification {
    id: string
    message: string
    date: string
    image: string
}


function Page() {
    const controls = useAnimation()
    

    const [notifications2026, setNotifications2026] = useState<Notification[]>(
        Array(10).fill(null).map((_, i) => ({
            id: `2026-${i}`,
            message: "New products from American beauty stores have been released.",
            date: "March 1, 2026",
            image: "/assets/img/notification.png"
        }))
    )
    
    const [notifications2023, setNotifications2023] = useState<Notification[]>(
        Array(3).fill(null).map((_, i) => ({
            id: `2023-${i}`,
            message: "New products from American beauty stores have been released.",
            date: "March 1, 2023",
            image: "/assets/img/notification.png"
        }))
    )

    const removeNotification = (id: string, year: 2026 | 2023) => {
        if (year === 2026) {
            setNotifications2026(notifications2026.filter(notification => notification.id !== id))
        } else {
            setNotifications2023(notifications2023.filter(notification => notification.id !== id))
        }
    }

    useEffect(() => {
        controls.start("visible")
      }, [controls])
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
      }
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            mass: 0.8,
            stiffness: 100,
            damping: 15,
          },
        },
      }

    const renderNotifications = (notifications: Notification[], year: 2026 | 2023) => (
        <div className="space-y-2 px-2 ">
            <motion.div
            variants={containerVariants} initial="hidden" animate={controls}
          >
            <AnimatePresence>
            {notifications.map((notification) => (
                <motion.div
                    key={notification.id}
                    layout
                    variants={itemVariants}
                    exit={{
                      opacity: 0,
                      x: -20,
                      transition: { duration: 0.2 },
                    }}
                    whileHover={{
                        x: 7,
                        transition: { duration: 0.2 },
                    }}
                
                    
                    className="flex lg:items-center group relative overflow-hidden justify-between py-4 border-b border-[#CCCCCC] hover:rounded-md"
                >
                    <div className="flex items-center gap-4 ">
                        <div className="">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Avatar >
                            <AvatarImage src={notification.image} alt="Profile" className="rounded-full w-24 h-12 lg:w-10 lg:h-10"/>
                            </Avatar>
                        </motion.div>
                        </div>
                        <span className="text-base lg:text-xl text-[#4D4D4D]">{notification.message}</span>
                    </div>
                    <div className="flex items-center justify-end flex-wrap-reverse gap-4">
                        <span className="text-nowrap text-xs lg:text-base text-[#4D4D4D]">{notification.date}</span>
                        <motion.button
                            className="hover:text-[#000000] right-2 transition-opacity duration-200 "
                            onClick={() => removeNotification(notification.id, year)}
                            // className="hover:text-red-400 transition-colors w-[20px] h-[20px]"
                            aria-label="Close notification"

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className='text-[#000000] w-[20px] h-[20px] hover:text-red-500' />
                        </motion.button>
                    </div>
                </motion.div>
            ))}
            </AnimatePresence>
            </motion.div>
        </div>
    )


    return (
        <>
            <PageHeader
                    title="Notifications"
                    items={[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Notifications",
                        href: "/notifications",
                      },
                    ]}
                  />
        
        <div className="section">
            <div className="text-center mb-12">
                <div className="font-bold">
                    <div className="mt-[-10px]">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                        <SectionHeading heading={"Notifications"} subheading={""} />
                    </motion.div>
                        
                    </div>
                </div>
            </div>
            <div className="container">
                <ScrollArea className="">
                    <div className="">
                    <motion.h1
                        className="text-[25px] text-black font-bold mb-2 px-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        New
                    </motion.h1>
                        {renderNotifications(notifications2026, 2026)}
                    <motion.h1
                        className="text-[25px] mt-8 mb-2 text-black font-bold px-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Earlier
                    </motion.h1>
                        {renderNotifications(notifications2023, 2023)}
                    </div>
                </ScrollArea>
            </div>
        </div>
        </>
    )
}

export default Page