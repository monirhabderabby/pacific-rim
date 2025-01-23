import * as React from "react";
import { TimeUnitProps } from "./types";

export function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center w-[60px]">
      <div className="text-lg font-medium text-black">{value}</div>
      <div className="text-xs text-neutral-400">{label}</div>
    </div>
  );
}