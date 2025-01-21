import React from "react";
import Modal from "../shared/modal/modal";
import { Button } from "../ui/button";
import Image from "next/image";

const RegisterProvider = ({ isOpen, setIsOpen }: any) => {
  return (
    <div>
      {isOpen && (
        <Modal>
          <div>
            <div className="mx-auto mt-6 w-[205px] h-[205px] relative">
              <Image
                src="/assets/img/logo.png"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h2 className="text-center text-[25px] md:text-[36.53px] text-[#333333] font-bold leading-[30px] md:leading-[33.6px] lg:leading-[43.84px] mt-2">
              PACIFIC RIM FUSION
            </h2>
            <h3 className="text-center text-[20px] md:text-[26px] lg:text-[32px] text-[#121D42] font-semibold leading-[24px md:leading-[30px] 5xl:leading-[38.4px] mt-[20px] md:mt-[25px]">
              Get 50% offer for your first purchase.
            </h3>
            <p className="text-center text-base md:text-xl lg:text-[22px] text-[#102011] font-normal leading-[19px] md:leading-[23px] lg:leading-[26.4px] mt-2 md:mt-4">
              &quot;Save up on your favorite items - Limited time offer&quot;
            </p>
            <div className="w-full flex justify-center mt-[30px] md:mt-[35px]">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full md:w-[80%] text-base font-medium leading-[19px] text-white bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD]"
              >
                Reward Now
              </Button>
            </div>
            <div className="w-full flex justify-center mt-[14px]">
              <Button
                onClick={() => setIsOpen(isOpen)}
                variant="outline"
                className="w-full md:w-[80%] text-[#121D42] border border-[#121D42]"
              >
                No Thanks
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RegisterProvider;
