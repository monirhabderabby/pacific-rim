import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Product {
  id: number
  status: string
  price: number
  quantity: number
  date: string
}

const products: Product[] = [
  {
    id: 187,
    status: "On the way",
    price: 7000.00,
    quantity: 6,
    date: "8 Sep, 2020"
  },
  {
    id: 22,
    status: "Completed",
    price: 7000.00,
    quantity: 3,
    date: "8 Sep, 2020"
  },
  {
    id: 3344,
    status: "On the way",
    price: 7000.00,
    quantity: 9,
    date: "8 Sep, 2020"
  },
  {
    id: 343,
    status: "Processing",
    price: 7000.00,
    quantity: 9,
    date: "8 Sep, 2020"
  },
  {
    id: 9343,
    status: "On the way",
    price: 7000.00,
    quantity: 9,
    date: "8 Sep, 2020"
  },
  {
    id: 3343,
    status: "Processing",
    price: 7000.00,
    quantity: 9,
    date: "8 Sep, 2020"
  }
]
const OrderHistory = () => {

  return (
    <div>

          <div className=" lg:w-[870px] mx-auto p-0 lg:p-4">
            {/* Table for medium and larger screens */}
            <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200">
                <div className="flex justify-between items-center p-3">
                <h1 className="text-[32px] font-semibold my-5 text-[#2A6C2D]">Recet Order History</h1>
                <Button className="bg-[#2A6C2D] hover:bg-primary-green ease-in-out rounded-md">
      Proceed  <ArrowRight />
    </Button> 
                </div>
              <table className="w-full">
                <thead className="bg-gray-100 ">
                  <tr className="">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Order Id </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 text-sm text-gray-600">
                    
                        <p className="">#{product.id}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                       {product.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {product.price} ({product.quantity} products)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {product.status}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#2A6C2D] font-medium">
                     <Link  href="#"> view Details </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        
            {/* Card layout for small screens */}
            <div className="md:hidden space-y-4 m-0">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-2">
                  <div className="flex items-center gap-4 mb-4">
                
                       <p className="text-sm">Order Id: </p>
                    <span className="text-sm font-medium text-gray-900">#{product.id}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-[12px] text-gray-900"> {product.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total:</span>
                      <span className="text-[12px] text-gray-900"> {product.price} <br /> ({product.quantity} products)</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-sm font-medium text-gray-600">Status:</span>
                      <span className="text-[12px] font-medium text-gray-900">
                      {product.status}
                      </span>
                    </div>
                    <div className="text-[12px] p-2 text-sm text-[#2A6C2D] font-medium">
                    <Link  href="#"> view Details </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default OrderHistory