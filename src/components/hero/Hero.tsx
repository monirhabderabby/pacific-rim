"use client"
// package import
import Image from "next/image";

import { useState } from "react";
import Modal from "../shared/modal/modal";
import { Button } from "../ui/button";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (

        <Modal>
        <div>
          <div className="mx-auto mt-6 w-[160px] md:w-[205px] h-[160px] md:h-[205px] relative">
            <Image
              src="/assets/img/logo.png"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-center text-[28px] md:text-[36.53px] text-[#333333] font-bold leading-[33.6px] md:leading-[43.84px] mt-2">
          PACIFIC RIM FUSION
          </h2>
          <h3 className="text-center text-[32px] text-[#0057A8] font-semibold leading-[38.4px] mt-[25px]">
          Get 50% offer for your first purchase.
          </h3>
          <p className="text-center text-[22px] text-[#102011] font-normal leading-[26.4px] mt-4">
          &quot;Save up on your favorite items - Limited time offer&quot;
          </p>
          <div className="w-full flex justify-center mt-[35px]">
            <Button  onClick={()=>setIsOpen(!isOpen)} className="w-[80%] bg-[#0057A8]">
            Reward Now
            </Button>
          </div>
          <div className="w-full flex justify-center mt-[14px]">
            <Button onClick={()=>setIsOpen(isOpen)} variant="outline" className="w-[80%] text-[#0057A8] border border-[#0057A8]">
            No Thanks
            </Button>
          </div>
        </div>
      </Modal>
      )}


     {
      !isOpen &&  <div>
      <section
        className="relative w-full h-[430px] lg:h-[530px] bg-cover bg-center z-[-10] lg:px-20"
        style={{
          backgroundImage: `url(assets/img/heroBg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat", // Ensure seamless background
          animation: "moveBackground 30s linear infinite alternate", // Alternate animation direction
          top: 0,
          left: 0,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container z-10 flex items-center justify-start   h-full text-white ">
          <div className="md:w-[670px]">
            <h1 className="text-[32px] leading-[38.4px] lg:text-[56px] lg:leading-[67.2px] font-semibold mb-4">
              SHARE THE <br />
              BALANCE
            </h1>
            <p className="text-[16px] md:text-[18px] mb-8">
              SHRED is here to make your weed experience easier. It all
              started with three great flavor pre-milled blends. Since then,
              SHRED has expanded to include gummies, vapes, infused pre-rolls,
              and even hash!
            </p>
          </div>
        </div>
      </section>

      {/* three image  */}
      <div className="grid grid-cols-3 gap-4 lg:gap-[24px] mx-auto max-w-[1200px] mt-[-50px] lg:mt-[-100px] z-50 justify-items-center p-2">
        <div className="h-[130px] w-[103px] md:w-[200px] md:h-[220px] lg:h-[300px] lg:w-[370px]  rounded-[16px] relative">
          <Image
            src="/assets/img/hero1.png"
            alt="Picture of the author"
            className="rounded-[16px]"
            fill
            priority
          />
        </div>
        <div className="h-[130px] w-[103px] md:w-[200px] md:h-[220px] lg:h-[300px] lg:w-[370px]  rounded-[16px] relative">
          <Image
            src="/assets/img/hero2.png"
            alt="Picture of the author"
            className="rounded-[16px]"
            fill
            priority
          />
        </div>
        <div className="h-[130px] w-[103px] md:w-[200px] md:h-[220px] lg:h-[300px] lg:w-[370px]  rounded-[16px] relative">
          <Image
            src="/assets/img/hero3.png"
            alt="Picture of the author"
            className="rounded-[16px]"
            fill
            priority
          />
        </div>
      </div>

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
    </div>
     }
    </>
  );
};

export default Hero;
