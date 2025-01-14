import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import LoginBackButton from "./_components/loginBackButton";

export default async function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen  overflow-hidden">
      <div className="mx-auto container px-4 py-8">
        <div className="relative rounded-lg ">
          <div className="flex items-center justify-between py-4 md:mb-[90px]">
            <Link href="/">
              <div className="flex items-cente gap-1">
                <Image
                  src="/assets/img/logo.png"
                  alt="Pacific Rim Fusion"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-[10px] leading-[12px]">
                  Pacific <br /> Rim <br /> Fusion
                </span>
              </div>
            </Link>
            <LoginBackButton />
          </div>
          <div className="grid h-[600px] md:grid-cols-2">
            <div className="relative hidden md:block">
              <Image
                src="https://i.postimg.cc/X7ywkKYd/e0ba46c9845debdbdfbf19f3d80aba56-1.png"
                alt="CBD Products"
                fill
                className="rounded-l-lg object-cover rounded-2xl"
              />
            </div>
            <div className="md:p-8 flex flex-col justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
