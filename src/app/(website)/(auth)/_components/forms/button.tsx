import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NextButton({ disable }: { disable?: boolean }) {
  return (
    <Button disabled={disable} className="font-medium text-base leading-[20px] bg-[#2A6C2D] hover:bg-[#266129] text-white">Next <ArrowRight className="ml-2" /></Button>
  )
}
