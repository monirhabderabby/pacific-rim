"use client";

import { CartItemCard } from "@/components/shared/cards/cart-item";
import { useState } from "react";
import { CartSummary } from "./cart-summary";
import { Heart } from "lucide-react";
import { CartItem } from "@/types/cart";
import { initialItems } from "@/data/CartData";


export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = (id: string, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = subtotal > 0 ? 100 : 0;
    const tax = subtotal * 0.01;
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  const { subtotal, shipping, tax, total } = calculateTotals();

  return (
    <div className="container section border-b-[1px] border-primary-green-hover/50 pb-[50px] ">
      <h1 className="text-2xl font-semibold text-[#2A6C2D] text-center mb-8">
        Your Shopping Cart
      </h1>

      <div className="max-w-7xl mx-auto lg:grid md:grid-cols-[1fr_500px] gap-8">
        <div className="space-y-6 lg:border-r-[.5px] border-[#A8C3A9]/70 md:pr-8">
          <h2 className="text-xl font-semibold text-[#2A6C2D] mb-6">
            Cart Items
          </h2>
          <div className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
                icon={<Heart className="w-4 h-4 text-gray-600" />}
              />
            ))}
          </div>
        </div>
        <div className="md:sticky md:top-8 h-fit">
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
}
