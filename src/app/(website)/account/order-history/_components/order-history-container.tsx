"use client";
import OrderHistory from "@/components/orderHistory/OrderHistory";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";

const OrderHistoryContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="space-y-[40px]">
      <OrderHistory />
      <PacificPagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        totalPages={20}
      />
    </div>
  );
};

export default OrderHistoryContainer;
