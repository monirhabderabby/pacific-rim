"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from "react"

interface ProfileData {
  completionPercentage: number
  domain: string
}

export default function ProfileCompletion() {
  const [profileData, setProfileData] = useState<ProfileData>({
    completionPercentage: 0,
    domain: "www.staging-Thailand-Pasific fuision"
  })

  // Simulate loading profile data
  useEffect(() => {
    // This would typically be an API call
    const loadProfileData = () => {
      setProfileData({
        completionPercentage: 90,
        domain: "www.staging-Thailand-Pasific fuision"
      })
    }

    loadProfileData()
  }, [])

  return (
  <div className="w-full h-[173px] bg-white rounded-[12px] p-[24px] my-[30px]">
      <div className="w-full max-w-2xl   space-y-2">
      <h1 className="text-[22px] font-semibold text-blue-700">
        Welcome to the {profileData.domain}
      </h1>
      
      <div className="space-y-2 flex  items-center ">
       
        <Progress 
          value={profileData.completionPercentage} 
          className="h-2 w-[270px] bg-[#C5C5C5] [&>div]:bg-[#0057A8]"
        /> 
         <div className="flex justify-between text-sm ml-5">
        <span>Profile complete {profileData.completionPercentage}%</span>
      </div>
      </div>

      <Button 
        className="bg-[#0057A8] hover:bg-blue-800 text-white w-fit"
        onClick={() => console.log("Navigating to profile...")}
      >
        Go To Customer Profile
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
  )
}

