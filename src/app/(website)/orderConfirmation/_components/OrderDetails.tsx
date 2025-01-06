import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface OrderDetailsProps {
  confirmationNumber: string
  shippingAddress: {
    name: string
    street: string
    cityStateZip: string
  }
  payment: {
    method: string
    subtotal: number
    shippingCost: number
    taxAmount: number
  }
  totalItems: number
}

const OrderDetails = ({
    confirmationNumber,
    shippingAddress,
    payment,
    totalItems,
  }: OrderDetailsProps) => {

    const orderTotal = payment.subtotal + payment.shippingCost + payment.taxAmount
  return (
    <div>

<div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-green-700">Order details.</h1>
        <p className="text-gray-600 mt-2">Confirmation number: {confirmationNumber}</p>
      </div>

 {/*------------- Vertical  Divider for sm devices----------*/}
      <div className=" border-t border-[#A8C3A9] w-full mb-10"></div>


      <div className="max-w-4xl mx-auto grid  grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
      {/* address details  */}
        <Card className="border-none shadow-none mb-[-50px]">
          <CardHeader>
            <CardTitle>Shipping Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className=" text-gray-600">{shippingAddress.name}</p>
            <p className="text-gray-600">{shippingAddress.street}</p>
            <p className="text-gray-600">{shippingAddress.cityStateZip}</p>
          </CardContent>
        </Card>

      {/*=====  Vertical  Divider for lg devices========= */}
        <div className="border-l border-gray-300 h-full"></div>
   {/*------------- Vertical  Divider for sm devices----------*/}
        <div className="block sm:hidden border-t border-gray-300 w-full"></div>


{/* payment details  */}
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>
            <div className="flex justify-between">
              <span className="text-gray-600">Paid With</span>
              <span className="font-medium">{payment.method}</span>
            </div>


            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
         
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>₱{payment.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping Estimate</span>
              <span>₱{payment.shippingCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax Estimate</span>
              <span>₱{payment.taxAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="pt-4 border-t">
              <div className="flex justify-between">
                <span className="font-medium">Order Total</span>
                <span className="font-medium">₱{orderTotal.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Button 
          className="bg-[#2A6C2D] hover:bg-primary-green text-white px-8"
        //   onClick={() => window.location.href = '/shop'}
        >
          Shop More
        </Button>
      </div>


      
    </div>



    </div>
  )
}

export default OrderDetails