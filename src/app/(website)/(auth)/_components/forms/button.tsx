import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";

export default function NextButton({ disable }: { disable?: boolean }) {
  return (
    <Button disabled={disable} size="md">
      Next
      <ArrowRight className="ml-2" />
    </Button>
  );
}

export function AddMoreButton({ disable }: { disable?: boolean }) {
  return (
    <Button
      disabled={disable}
      className="font-medium text-base leading-[20px] bg-white text-[#2A6C2D] hover:bg-[#266129] px-[24px] py-[12px] hover:text-white border border-[#2A6C2D]"
    >
      Add More
      <Plus className="ml-2" />
    </Button>
  );
}
