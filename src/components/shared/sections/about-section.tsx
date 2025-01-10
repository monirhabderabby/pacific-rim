import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "../cards/social-icons";

export default function AboutSection({ image }: { image: string }) {
  {
    return (
      <div className="container section">
        <section className=" h-auto   flex md:flex-row flex-col justify-between gap-8 items-center w-full  ">
          <div className="flex-1">
            <div>
              <div className="my-4">
                <h1 className=" text-[25px] lg:text-[32px] font-semibold text-primary-green-hover leading-[30px] lg:leading-[38.4px]">
                  About Pacific Rim Fusion
                </h1>
                <h4 className="text-[16px] leading-[19.2px] lg:text-[20px] font-medium lg:leading-[24px] bg-clip-text text-transparent bg-gradient-to-r from-[#1D4C1F] to-[#44B249]">
                  Cannabis B2B Marketplace
                </h4>
              </div>

              <article className="mt-[38px] text-[16px] leading-[19.2px] font-normal text-[#444444]">
                Welcome to Pacific Rim Fusion, the leading B2B online auction
                marketplace dedicated to empowering local cannabis farms and
                businesses in markets often dominated by larger operators.
                Operating in Federally legal jurisdictions including Thailand,
                Germany, and Canada, we specialize in facilitating the sale of
                surplus cannabis and cannabis-related products through a secure
                and dynamic platform.
              </article>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold my-4 leading-[24px] mt-[20px] text-[#3D3D3D]">
                Our MIssion
              </h3>
              <p className="mt-[20px] text-[#444444] text-[16px] leading-[19.2px]">
                Our mission at Pacific Rim Fusion is to level the playing field
                for local cannabis businesses by providing a platform that
                enhances their visibility and competitive edge in an expanding
                and evolving market. We are committed to streamlining the
                cannabis supply chain, ensuring legal compliance, and fostering
                sustainable business practices.
              </p>
            </div>
            <div className="">
              {/* statistic */}
              <div className=" flex flex-col md:flex-row  items-center gap-8 my-8 text-[#000000]">
                <div className="">
                  <h3 className="text-[32px] font-semibold  leading-[38.4px] text-center">
                    30K+
                  </h3>
                  <h4 className="text-[20px] font-medium">Our Products</h4>
                </div>
                <div>
                  <h3 className="text-[32px] font-semibold  leading-[38.4px] text-center">
                    12K+
                  </h3>
                  <h4 className="text-[20px] font-medium">
                    Satisfied Customers
                  </h4>
                </div>
                <div>
                  <h3 className="text-[32px] font-semibold  leading-[38.4px] text-center">
                    2K+
                  </h3>
                  <h4 className="text-[20px] font-medium">Our Vendor</h4>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-[25px]">
                {/* Links  */}
                <Button asChild size="md" className="w-[160px]">
                  <Link href="/Click" className=" text-white">
                    Click Here
                  </Link>
                </Button>
                <SocialIcons />
              </div>
            </div>
          </div>
          <div className="hidden relative w-[500px] h-[600px] overflow-hidden rounded-[16px]  md:block">
            <Image
              src={image}
              alt="Picture of the author"
              className="rounded-[16px] hover:scale-105 transition-all duration-300"
              fill
            />
          </div>
        </section>
      </div>
    );
  }
}
