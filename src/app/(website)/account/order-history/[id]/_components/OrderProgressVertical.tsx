import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface OrderStatus {
  isComplete: boolean;
  date?: string;
}

interface OrderStatusState {
  ordered: OrderStatus;
  processing: OrderStatus;
  shipping: OrderStatus;
  delivered: OrderStatus;
}

export default function OrderProgressMobile() {
  const orderStatus: OrderStatusState = {
    ordered: {
      isComplete: true,
    },
    processing: {
      isComplete: true,
    },
    shipping: {
      isComplete: false,
    },
    delivered: {
      isComplete: false,
    },
  };

  let progressValue = 0;
  if (orderStatus.ordered.isComplete) progressValue += 0;
  if (orderStatus.processing.isComplete) progressValue += 33;
  if (orderStatus.shipping.isComplete) progressValue += 33;
  if (orderStatus.delivered.isComplete) progressValue += 34;

  return (
    <div className="relative w-full pt-6">
      {/* Progress Line */}
      <Progress
        value={progressValue}
        className="absolute left-0 top-10 h-[350px] translate-x-[13px] w-[5px] bg-gray-200 [&>div]:bg-[#2A6C2D]"
        orientation="vertical"
      />
      {/* Status Points */}
      <div className="relative flex flex-col space-y-20 mt-4">
        {/* Ordered */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              orderStatus.ordered.isComplete
                ? "bg-[#2A6C2D]"
                : "bg-white border border-[#2A6C2D] border-dashed"
            }`}
          >
            {orderStatus.ordered.isComplete && (
              <Check className="h-5 w-5 text-white" />
            )}
          </div>
          <p
            className={`text-sm font-medium ${
              orderStatus.ordered.isComplete ? "text-[#2A6C2D]" : "text-black"
            }`}
          >
            Order received
          </p>
        </div>

        {/* Processing */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              orderStatus.processing.isComplete
                ? "bg-[#2A6C2D]"
                : "bg-white border border-[#2A6C2D] border-dashed"
            }`}
          >
            {orderStatus.processing.isComplete ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <span className="text-[#2A6C2D]">2</span>
            )}
          </div>
          <p
            className={`text-sm font-medium ${
              orderStatus.processing.isComplete
                ? "text-[#2A6C2D]"
                : "text-black"
            }`}
          >
            Processing
          </p>
        </div>

        {/* Shipping */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              orderStatus.shipping.isComplete
                ? "bg-[#2A6C2D]"
                : "bg-white border border-[#2A6C2D] border-dashed"
            }`}
          >
            {orderStatus.shipping.isComplete ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <span className="text-[#2A6C2D]">3</span>
            )}
          </div>
          <p
            className={`text-sm font-medium ${
              orderStatus.shipping.isComplete ? "text-[#2A6C2D]" : "text-black"
            }`}
          >
            On the way
          </p>
        </div>

        {/* Delivered */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              orderStatus.delivered.isComplete
                ? "bg-[#2A6C2D]"
                : "bg-white border border-[#2A6C2D] border-dashed"
            }`}
          >
            {orderStatus.delivered.isComplete ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <span className="text-[#2A6C2D]">4</span>
            )}
          </div>
          <div className="flex flex-col">
            <p
              className={`text-sm font-medium ${
                orderStatus.delivered.isComplete
                  ? "text-[#2A6C2D]"
                  : "text-black"
              }`}
            >
              Delivered
            </p>
            <p className="text-xs text-gray-500">
              {orderStatus.delivered.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
