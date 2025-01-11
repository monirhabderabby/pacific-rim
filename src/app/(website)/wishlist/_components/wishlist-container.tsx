"use client";

import { CartItemCard } from "@/components/shared/cards/cart-item";
import { Button } from "@/components/ui/button";
import { initialItems } from "@/data/CartData";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const WishlistContainer = () => {
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
    <section>
      <h4 className="text-[20px] font-semibold my-4 text-[#2A6C2D]">Wish list Items</h4>
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

      <div className="flex justify-center py-[40px] border-b border-primary-green-hover/50">
        <Button className="bg-primary-green-hover hover:bg-primary-green-hover/85 rounded-[8px] h-[43px]">
          Move All them to Cart
        </Button>
      </div>
    </section>
  );
};

export default WishlistContainer;
