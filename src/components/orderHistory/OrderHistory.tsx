
import Link from "next/link"
import { ButtonArrow } from "../shared/button/ButtonArrow"
import SmButtonArrow from "../shared/button/SmButtonArrow"

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

      <div className=" w-[370px] lg:w-[870px] mx-auto  mt-5">
        {/* Table for medium and larger screens */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200">
          <div className="flex justify-between items-center p-3">
            <h1 className="text-[32px] font-semibold my-5 text-[#2A6C2D]">Recet Order History</h1>

            <ButtonArrow text={" Explore More"} />
          </div>
          <table className="w-full ">
            <thead className="bg-gray-100 ">
              <tr className="">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Order Id </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              {products.map((product) => (
                <tr className="hover:bg-[#EAF0EA]" key={product.id}>
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
                    <Link href="#"> view Details </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for small screens */}
        <div className="md:hidden   w-full border border-gray-200 rounded-lg">
        <h1 className="text-[20px] leading-[24px] text-center font-semibold py-3 text-[#2A6C2D] border-b">Recet Order History</h1>
          {products.map((product) => (
            <div key={product.id} className=" w-full  border-b border-gray-200 p-3  hover:bg-[#EAF0EA] ">
              <div className="flex justify-between gap-4 mb-4">

                <p className="text-[16px] font-normal text-[#444444]">Order Id: </p>
                <span className="text-[16px] font-normal text-gray-900">#{product.id}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[16px] font-normal text-[#444444]">Date:</span>
                  <span className="text-[16px] font-normal text-[#444444]"> {product.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[16px] font-normal text-[#444444]">Total:</span>
                  <span className="text-[16px] font-normal text-[#444444]"> {product.price}  ({product.quantity} products)</span>
                </div>
                <div className="flex justify-between pt-2 ">
                  <span className="text-[16px] font-normal text-[#444444]">Status:</span>
                  <span className="text-[16px] font-normal text-[#444444]">
                    {product.status}
                  </span>
                </div>
                <div className="text-[16px] p-2 text-sm text-center text-[#2A6C2D] ">
                  <Link href="#"> View Details </Link>
                </div>
              </div>
            </div>
          ))}
              <div className="mx-auto flex py-5">
             
                <SmButtonArrow text={"Explore More"}/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory