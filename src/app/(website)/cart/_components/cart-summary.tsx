interface CartSummaryProps {
    subtotal: number
    shipping: number
    tax: number
    total: number
    onCheckout: () => void
  }
  
  export function CartSummary({ subtotal, shipping, tax, total, onCheckout }: CartSummaryProps) {
    return (
      <div className="rounded-lg p-4">
        <h5 className="text-xl font-semibold text-[#2A6C2D] mb-6 border-b border-[#A8C3A9]">Cart Total</h5>
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
          <button
            onClick={onCheckout}
            className="w-full bg-[#2A6C2D] hover:bg-green-700 text-white py-3 rounded-lg mt-4 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    )
  }
  
  