import Image from "next/image";
import Link from "next/link";
import SocialIcons from "../cards/social-icons";


export default function AboutSection({ image }: { image: string }) {
  {
    return (
      <section className=" h-auto  container flex md:flex-row flex-col justify-between gap-8 items-center w-full section ">
        <div className="flex-1">
          <div>
            <div className="my-4">
              <h1 className="text-[32px] font-semibold text-primary-green-hover">
                About Pacific Rim Fusion
              </h1>
              <h4 className="text-[20px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#1D4C1F] to-[#44B249]">
                Cannabis B2B Marketplace
              </h4>
            </div>

            <article className="my-4">
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
            <h3 className="text-[20px] font-semibold my-4">Our MIssion</h3>
            <p className="my-4">
              Our mission at Pacific Rim Fusion is to level the playing field
              for local cannabis businesses by providing a platform that
              enhances their visibility and competitive edge in an expanding and
              evolving market. We are committed to streamlining the cannabis
              supply chain, ensuring legal compliance, and fostering sustainable
              business practices.
            </p>
          </div>
          <div className="">
            {/* statistic */}
            <div className="flex items-center gap-8 my-8">
              <div>
                <h3 className="text-[32px] font-semibold text-center">30K+</h3>
                <h4 className="text-[20px] font-medium">Our Products</h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-center">12K+</h3>
                <h4 className="text-[20px] font-medium">Satisfied Customers</h4>
              </div>
              <div>
                <h3 className="text-[32px] font-semibold text-center">2K+</h3>
                <h4 className="text-[20px] font-medium">Our Vendor</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Links  */}
              <Link href="/Click" className=" text-white">
                <button
                  type="button"
                  className="transition ease-in-out delay-100 bg-[#2A6C2D] hover:-translate-y-1 hover:scale-105 hover:bg-[#3da842] duration-300 py-2 lg:px-8 md:px-4 px-2 border-none border rounded-lg md:text-base text-sm"
                >
                  Click Here
                </button>
              </Link>
              <SocialIcons/>
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-[400px] h-[700px] overflow-hidden rounded-[16px] hidden md:block">
          <Image
            src={image}
            alt="Picture of the author"
            className="rounded-[16px] hover:scale-105 transition-all duration-300"
            fill
          />
        </div>
      </section>
    );
  }
}
