import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface OrderDetailsProps {
  confirmationNumber: string;
  shippingAddress: {
    name: string;
    street: string;
    cityStateZip: string;
  };
  payment: {
    method: string;
    subtotal: number;
    shippingCost: number;
    taxAmount: number;
  };
  totalItems: number;
}

const OrderDetails = ({
  confirmationNumber,
  shippingAddress,
  payment,
  totalItems,
}: OrderDetailsProps) => {
  const orderTotal =
    payment.subtotal + payment.shippingCost + payment.taxAmount;
  return (
    <div>
      <div className="max-w-6xl mx-auto mb-[40px] md:mb-[60px] lg:mb-[80px]">
        <div className="text-center mb-8">
          <h1 className="heading">Order details.</h1>
          <p className="text-sm md:text-base font-normal leading-[19px] text-[#444444] mt-4">
            Confirmation number: {confirmationNumber}
          </p>
        </div>

        {/*------------- Vertical  Divider for sm devices----------*/}
        <div className="border-t border-gray-300 w-full mb-10"></div>

        <div className="max-w-4xl mx-auto grid  grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* address details  */}
          <Card className="border-none shadow-none mb-[-50px]">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <span className="text-lg font-medium leading-[21px] text-[#444444]">Shipping Address</span>
                  <span className="text-xl font-medium leading-[24px] text-[#181818]">{payment.method}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between ">
                <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">{shippingAddress.name}</span>
                <span className="text-base font-medium leading-[19px] text-[#181818]">₿{payment.subtotal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">{shippingAddress.street}</span>
                <span className="text-base font-medium leading-[19px] text-[#181818]">₿{payment.shippingCost.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">
                  {shippingAddress.cityStateZip}
                </span>
                <span className="text-base font-medium leading-[19px] text-[#181818]">₿{payment.taxAmount.toLocaleString()}.00</span>
              </div>
            </CardContent>
          </Card>

          {/*=====  Vertical  Divider for lg devices========= */}
          <div className="border-l-2 border-gray-300 h-full"></div>
          {/*------------- Vertical  Divider for sm devices----------*/}
          <div className="block sm:hidden border-t border-gray-300 w-full"></div>

          {/* payment details  */}
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <span className="text-lg font-medium leading-[21px] text-[#444444]">Paid With</span>
                  <span className="text-xl font-medium leading-[24px] text-[#181818]">{payment.method}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">Subtotal</span>
                <span className="text-base font-medium leading-[19px] text-[#181818]">₿{payment.subtotal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">Shipping Estimate</span>
                <span className="text-base font-medium leading-[19px] text-[#181818]">₿{payment.shippingCost.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">Tax Estimate</span>
                <span className="text-base font-medium leading-[19px] text-[#181818]">₿{payment.taxAmount.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">Total Items</span>
                <span className="text-base font-medium leading-[19px] text-[#181818]">{totalItems}</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-base font-medium leading-[19px] text-[#9C9C9C]">Order Total</span>
                  <span className="text-base font-medium leading-[19px] text-[#181818]">
                    ₿{orderTotal.toLocaleString()}.00
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button
            className="bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] hover:bg-primary-green text-white py-[18px] px-[63px] md:px-[90px] lg:px-[120px]"
            //   onClick={() => window.location.href = '/shop'}
          >
            Shop More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
