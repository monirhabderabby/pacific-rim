"use client";

import { CartItemCard } from "@/components/shared/cards/cart-item";
import { CartItem } from "@/types/cart";
import { useState } from "react";
import { CartSummary } from "./cart-summary";

const initialItems: CartItem[] = [
  {
    id: "1",
    name: "American Beauty",
    price: 7000.0,
    originalPrice: 9325.0,
    image: "/assets/img/image 559.png",
    quantity: 1,
    rating: 4,
    isHot: false,
    views: 8,
  },
  {
    id: "2",
    name: "American Beauty",
    price: 7000.0,
    originalPrice: 9325.0,
    image: "/assets/img/image 559.png",
    quantity: 1,
    rating: 4,
    isHot: true,
    views: 8,
  },
  {
    id: "3",
    name: "American Beauty",
    price: 7000.0,
    originalPrice: 9325.0,
    image: "/assets/img/image 559.png",
    quantity: 1,
    rating: 4,
    isHot: true,
    views: 8,
  },
];

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

      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_500px] gap-8">
        <div className="space-y-6 md:border-r-[.5px] border-[#A8C3A9]/70 pr-8">
          <h2 className="text-xl font-semibold text-[#2A6C2D] mb-6">
            Cart Items
          </h2>
          <div className="space-y-4">
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
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
