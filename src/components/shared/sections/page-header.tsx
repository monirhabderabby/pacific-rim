import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

interface PageHeaderProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}
export function PageHeader({ title, items }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col items-center justify-center bg-black h-[109px] md:h-[300px] animate-moveBackground"
      )}
      style={{
        backgroundImage: `url(/assets/img/heroBg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        top: 0,
        left: 0,
      }}
    >
      <div className={cn("relative z-10 flex flex-col items-center gap-2")}>
        <h1 className="text-4xl font-semibold tracking-tight text-white text-center">
          {title}
        </h1>
        <Breadcrumb>
          <BreadcrumbList className="text-white">
            {/* <BreadcrumbItem>
              <BreadcrumbLink className="text-inherit hover:text-gray-200" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem> */}
            {items.map((item, index) => (
              <React.Fragment key={`fragment-${item.label}-${index}`}>
                {index > 0 && (
                  <BreadcrumbSeparator className="text-white">
                    {">"}
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem key={`item-${item.label}-${index}`}>
                  {index === items.length - 1 ? (
                    <BreadcrumbPage className="text-base md:text-lg lg:text-xl leading-[24px] font-normal md:font-medium lg:font-semibold text-white hover:text-gray-200">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      className="text-base md:text-lg lg:text-xl leading-[24px] font-normal md:font-medium lg:font-semibold text-white hover:text-gray-200"
                      href={item.href}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
          <div className="flex items-center justify-center py-2">
            <Image
              src="/assets/img/white-line.svg"
              className="w-16"
              alt="arrow"
              width={30}
              height={30}
            />
          </div>
        </Breadcrumb>
      </div>
    </div>
  );
}
