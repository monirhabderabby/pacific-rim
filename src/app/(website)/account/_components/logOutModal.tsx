// package import
import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image"
// local import 
import Modal from '@/components/shared/modal/modal'

const LogOutModal = ({cancelLogout,confirmLogout}:any) => {
  return (
    <div>
        <Modal>
        <div className="mt-6 max-h-[556-px] max-w-[551-px]">
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

              <div className="mt-2 text-[37px] text-[#333333] font-[700] pb-2">
                PACIFIC RIM FUSION
              </div>
            </div>
            <div>
              <div className="leading-[38px] font-[600] text-[32px] text-[#0057A8]">
              Are You Sure To Log Out?
              </div>
              <div className=" font-[400] text-[22px] text-[#102011] pb-3 pt-2 mb-5">
                Keep shopping with Rim Fusion.
              </div>
            </div>
          </div>
          <div className="w-[396px]">
            <Link href="#" passHref>
              {/* <Button className="w-full">See Order Details</Button> */}
              <Button onClick={confirmLogout} variant="outline" className="w-full rounded-md border-2 text-[#1a237e] hover:text-[#1a237e] border-[#1a237e] hover:bg-[#e6eef6] ">
            Yes
          </Button>
            </Link>

            <div className="mt-4">
              <Link href="#" passHref>
              <Button onClick={cancelLogout} className="w-full rounded-md bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">No</Button>

              </Link>
            </div>
          </div>
       
        </div>
      </div>
        </Modal>
    </div>
  )
}

export default LogOutModal