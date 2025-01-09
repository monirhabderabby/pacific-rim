'use client'
import { useState } from "react"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BackToListButtonProps {
  text: string
}

const SmButtonArrow = ({ text }: BackToListButtonProps) => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <Button
      className="bg-[#2A6C2D] hover:bg-[#2A6C2D]/90 text-white rounded-md transition-all duration-300 ease-in-out  px-[16px] py-[10px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{text}</span>
      <ArrowRight
        className={cn(
          "ml-2 h-4 w-4 transition-all duration-300 ease-in-out",
          isHovered ? "transform translate-x-1 text-white" : "text-white/70"
        )}
      />
    </Button>
  )
}

export default SmButtonArrow