// package import =========
import Image from "next/image";
import * as React from "react";
// local import ------------
import { Button } from "@/components/ui/button";
import { NavigationButtonProps } from "./types";


export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  iconSrc,
  onClick
}) => {
  return (
    <Button
      variant="default"
      size="icon"
      className="bg-green-800 hover:bg-green-700 w-[60px] h-[40px] rounded-[30px]"
      onClick={onClick}
      aria-label={`${direction} slide`}
    >
      <Image
        src={iconSrc}
        alt=""
        className="w-5 stroke-[2px] stroke-white"
        loading="lazy"
      />
    </Button>
  );
};