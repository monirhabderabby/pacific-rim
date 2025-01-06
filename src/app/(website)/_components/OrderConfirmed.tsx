import { Button } from "@/components/ui/button";
import { OrderConfirmationProps } from "@/data/Order";
import { Check } from "lucide-react";

const OrderConfirmed = ({ orderStatus }: OrderConfirmationProps) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-2xl font-semibold text-green-700 sm:text-3xl">
            Wooh Your order is confirmed.
          </h1>

          <p className="text-sm text-gray-600 sm:text-base">
            The Order Details page provides a comprehensive summary of your
            recent purchase.
          </p>

          {/* Progress Tracker */}
          <div className="relative w-full max-w-xl pt-6">
            {/* Progress Line */}
            <div className="absolute left-0 top-10 h-0.5 w-full bg-gray-200" />

            {/* Status Points */}
            <div className="relative flex justify-between">
              {/* Ordered */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    orderStatus.ordered.isComplete
                      ? "bg-green-700"
                      : "bg-[#BDD1BE]"
                  }`}
                >
                  {orderStatus.ordered.isComplete && (
                    <Check className="h-5 w-5 text-white" />
                  )}
                </div>
                <p className="mt-2 text-sm font-medium sm:text-base">Ordered</p>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {orderStatus.ordered.date}
                </p>
              </div>

              {/* Ready To shipping */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    orderStatus.shipping.isComplete
                      ? "bg-green-700"
                      : "bg-[#BDD1BE]"
                  }`}
                >
                  {orderStatus.shipping.isComplete && (
                    <Check className="h-5 w-5 text-white" />
                  )}
                </div>
                <p className="mt-2 text-sm font-medium sm:text-base">
                  Ready To shipping
                </p>
              </div>

              {/* Expired delivery */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    orderStatus.delivery.isComplete
                      ? "bg-green-700"
                      : "bg-[#BDD1BE]"
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

          <p className="max-w-md text-sm text-gray-600 sm:text-base">
            Delivery Times are estimated.If you{"'"}r experienced difficulty
            with this order plese conatct the seller.
          </p>

          <Button
            variant="default"
            className="bg-[#2A6C2D] hover:bg-primary-green"
          >
            Help center
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
