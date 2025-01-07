import * as React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"
import Image from 'next/image'

interface PageHeaderProps {
  title: string
  items: {
    label: string
    href: string
  }[]
}
export function PageHeader({
  title,
  items,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col items-center justify-center bg-black h-[300px]")}

        style={{
          backgroundImage: `url(assets/img/heroBg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat", // Ensure seamless background
          animation: "moveBackground 30s linear infinite alternate", // Alternate animation direction
          top: 0,
          left: 0,
        }
      
      }
    >
      <div className={cn(
        "relative z-10 flex flex-col items-center gap-2")}>
        <h1 className="text-4xl font-semibold tracking-tight text-white">{title}</h1>
        <Breadcrumb>
          <BreadcrumbList className="text-white">
            {/* <BreadcrumbItem>
              <BreadcrumbLink className="text-inherit hover:text-gray-200" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem> */}
            {items.map((item, index) => (
              <React.Fragment key={`fragment-${item.label}-${index}`}>
                {index > 0 && (
                  <BreadcrumbSeparator className="text-white">{'>'}</BreadcrumbSeparator>
                )}
                <BreadcrumbItem key={`item-${item.label}-${index}`}>
                  {index === items.length - 1 ? (
                    <BreadcrumbPage className="text-inherit">{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink className="text-inherit hover:text-gray-200 text-xl" href={item.href}>{item.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList> 
          <div className='flex items-center justify-center py-2'>
            <Image src="/assets/img/white-line.svg" className='w-16' alt="arrow" width={30} height={30} />
          </div> 
        </Breadcrumb>
      </div>
    </div>
  )
}

<style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 100%; /* Ends at this position */
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }       
        `}
      </style>
