'use client'
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

import { CartItemCard } from "@/components/shared/cards/cart-item";
import { initialItems } from "@/data/CartData";

export default function WishlistPage() {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id: string, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container section mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-semibold text-[#2A6C2D] text-center mb-8">
        Your Wishlist
      </h1>
      <div className="flex flex-wrap justify-center -mx-4">
        {items.slice(0, 6).map((item, index) => (
          <div
            key={item.id}
            className={`w-full md:w-1/2 xl:w-1/2 p-4 ${
              index % 2 === 0 ? "md:pr-2" : "md:pl-2"
            }`}
          >
            <CartItemCard
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
              icon={<ShoppingCart className="w-4 h-4 text-gray-600" />}
            />
          </div>
        ))}
      </div>
    </div>
  );
}