import Modal from "@/components/shared/modal/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderConfirmationModal = () => {
  return (
    <Modal>
      <div className="mt-6">
        <div className="flex flex-col items-center text-center">
          <div className="">
            <div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/img/logo.png"
                  width={205}
                  height={205}
                  alt="Pacific Rim Fusion Logo"
                />
              </div>

              <div className="mt-2 text-[37px] font-[700] pb-2">
                PACIFIC RIM FUSION
              </div>
            </div>
            <div>
              <div className="leading-[38px] font-[600] text-[32px] text-[#0057A8]">
                Thank You For your purchase.
              </div>
              <div className=" font-[400] text-[22px] text-[#102011] pb-3 pt-2">
                Keep shopping with Rim Fusion.
              </div>
            </div>
          </div>
          <div className="w-[396px]">
            <Link href={`/orderConfirmation/1`} passHref>
              <Button className="w-full">See Order Details</Button>
            </Link>
            <div className="mt-4">
              <Link href={`/`} passHref>
                <Button className="w-full" variant={"outline"}>
                  Go back To Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OrderConfirmationModal;
