import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  loading: boolean;
}

export function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
  onCheckout,
  loading,
}: CartSummaryProps) {
  return (
    <div className="rounded-lg p-4">
      <h5 className="text-xl font-semibold text-[#2A6C2D] mb-6 border-b border-[#A8C3A9]">
        Cart Total
      </h5>
      <div className="space-y-4">
        <div className="flex justify-between ">
          <span className="text-[#9C9C9C]">Subtotal</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-[#9C9C9C]">Shipping Estimate</span>
          <span>${shipping.toLocaleString()}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-[#9C9C9C]">Tax Estimate</span>
          <span>${tax.toLocaleString()}</span>
        </div>
        <div className="pt-4">
          <div className="flex justify-between ">
            <span className="text-[#9C9C9C]">Total Item</span>
            <span>${(subtotal + shipping).toLocaleString()}</span>
          </div>
        </div>
        <div className="border-t border-[#A8C3A9] pt-4">
          <div className="flex justify-between text-xl font-semibold">
            <span className="text-[#9C9C9C]">Order Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
        <Button
          onClick={onCheckout}
          className=" w-full relative"
          disabled={loading}
        >
          Checkout{" "}
          {loading && (
            <div>
              <Loader2 className="animate-spin absolute top-4 right-5 h-5 w-5 " />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}
