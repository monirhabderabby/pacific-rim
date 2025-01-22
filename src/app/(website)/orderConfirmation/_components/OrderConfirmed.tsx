import { Button } from "@/components/ui/button";
import { OrderConfirmationProps } from "@/data/Order";
import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress"
import Image from "next/image";


const OrderConfirmed = ({ orderStatus }: OrderConfirmationProps) => {
  // const totalStages = 3;
  // const completedStages = Object.values(orderStatus).filter(
  //   (stage) => stage.isComplete
  // ).length;
  // const progressValue = (completedStages / totalStages) * 100;
  let progressValue = 0;
  if (orderStatus.ordered.isComplete) progressValue += 0;
  if (orderStatus.shipping.isComplete) progressValue += 50;
  if (orderStatus.delivery.isComplete) progressValue += 100;
  return (
    <div>
      <div className="container py-[40px] md:py-[60px] lg:py-[80px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="heading text-center">
            Wooh Your order is <br className="block md:hidden"/> confirmed
          </h1>
          <div className="flex items-center justify-center mt-[8px] mb-[16px]">
                      <Image
                        src="/assets/img/line_bar.png"
                        className="w-full"
                        alt="line bar"
                        width={72}
                        height={4}
                      />
                    </div>
          <p className="text-base font-normal leading-[19px] text-[#444444] text-center md:text-left">
            The Order Details page provides a <br className="block md:hidden"/> comprehensive summary of your
            recent <br className="block md:hidden"/> purchase.
          </p>

          {/* Progress Tracker */}
          <div className="relative w-full max-w-xl pt-6 ">
            {/* Progress Line */}
            <Progress value={progressValue} className="absolute left-0 top-10 h-[1px] w-full bg-black [&>div]:bg-[#121D42]" />

            {/* Status Points */}
            <div className="relative flex justify-between ">
              {/* Ordered */}
              <div className="flex flex-col items-start ">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    orderStatus.ordered.isComplete
                      ? "bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD]"
                      : "bg-[#E6EEF6] border border-[#444444]"
                  }`}
                >
                  {orderStatus.ordered.isComplete && (
                    <Check className="h-5 w-5 text-[#FDFEFD]" />
                  )}
                </div>
                <p className="mt-2 text-sm font-medium sm:text-base text-center">Ordered</p>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {orderStatus.ordered.date}
                </p>
              </div>

              {/* Ready To shipping */}
              <div className="flex flex-col items-center translate-x-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    orderStatus.shipping.isComplete
                      ? "bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD]"
                      : "bg-[#E6EEF6] border border-[#444444]"
                  }`}
                >
                  {orderStatus.shipping.isComplete && (
                    <Check className="h-5 w-5 text-white " />
                  )}
                </div>
                <p className="mt-2 text-sm font-medium sm:text-base">
                  Ready To shipping
                </p>
              </div>

              {/* Expired delivery */}
              <div className="flex flex-col items-end translate-x-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    orderStatus.delivery.isComplete
                      ? "bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD]"
                      : "bg-[#E6EEF6] border border-[#444444]"
                  }`}
                >
                  {orderStatus.delivery.isComplete && (
                    <Check className="h-5 w-5 text-white" />
                  )}
                </div>
                <p className="mt-2 text-sm font-medium sm:text-base">
                  Expired delivery
                </p>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {orderStatus.delivery.date}
                </p>
              </div>
            </div>
          </div>

          <p className="text-base font-normal leading-[19px] text-[#444444] mt-[40px] mb-[27px] text-center md:text-left">
            Delivery Times are estimated.If you&apos;r <br className="block md:hidden"/> experienced difficulty
            with this order plese <br className="block md:hidden"/> conatct the seller.
          </p>

          <Button
            variant="default"
            className="bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] text-white hover:bg-[#121D42] px-[70px]"
          >
            Help center
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
