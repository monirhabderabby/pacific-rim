import * as React from "react";
import { AddressInfo } from "./types";

interface AddressCardProps {
  title: string;
  info: AddressInfo;
}

export function AddressCard({ title, info }: AddressCardProps) {
  return (
    <div className="flex flex-col min-w-[240px] w-[284px]">
      <div className="flex-1 shrink gap-2.5 self-stretch p-3 w-[140%] md:w-full text-2xl font-medium leading-tight text-green-800 border-b border-solid border-b-stone-300">
        {title}
      </div>
      <div className="flex flex-col p-3 w-full text-base">
        <div className="text-xl font-medium leading-tight text-black">
          {info.name}
        </div>
        <div className="flex flex-col mt-3 w-full">
          <div className="font-medium leading-tight text-neutral-700">
            Address
          </div>
          <div className="mt-1 leading-5 text-neutral-400">
            {info.address}
          </div>
        </div>
        <div className="flex flex-col mt-3 w-full leading-tight whitespace-nowrap">
          <div className="font-medium text-neutral-700">Email</div>
          <div className="mt-1 text-neutral-400">{info.email}</div>
        </div>
        <div className="flex flex-col mt-3 w-full leading-tight">
          <div className="font-medium text-neutral-700">Phone</div>
          <div className="mt-1 text-neutral-400">{info.phone}</div>
        </div>
      </div>
    </div>
  );
}