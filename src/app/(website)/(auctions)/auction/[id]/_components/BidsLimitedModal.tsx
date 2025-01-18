import Modal from "@/components/shared/modal/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BidsLimitedModal = () => {
  return (
    <Modal>
      <div className="mt-6">
        <div className="flex flex-col items-center text-center">
          <div className="">
            <div>
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/img/quesMark.png"
                  width={500}
                  height={361}
                  alt="Pacific Rim Fusion Logo"
                />
              </div>

              <div className="mt-2 text-[37px] font-[700] pb-2 text-[#0057A8] w-[500px]">
              <div>Oops!</div> 
              <div className="leading-[35px]">You Reached your</div> Bidding limit
              </div>
            </div>
            <div>
              <div className="leading-[30px] font-[400] text-[25px] text-[#6D6D6D]">
              Ready to Start selling something awesome.
              </div>
            </div>
          </div>
          <div className="w-[396px] mt-10">
            <Link href={`/orderConfirmation/1`} passHref>
              <Button className="w-full">See membership Plans</Button>
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

export default BidsLimitedModal;
