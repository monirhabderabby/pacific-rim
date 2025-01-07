import { PageHeader } from "@/components/shared/sections/breadcrumb-section";
import OrderConfirmed from "./_components/OrderConfirmed";
import OrderDetails from "./_components/OrderDetails";

const Page = () => {
  // order Status data it will be come backend ==========
  const orderStatus = {
    ordered: {
      date: "17 jan,2024",
      isComplete: true,
    },
    shipping: {
      isComplete: false,
    },
    delivery: {
      date: "Jan 25-29",
      isComplete: false,
    },
  };
  // order Details data it will be come backend #####################
  const orderData = {
    confirmationNumber: "566842",
    shippingAddress: {
      name: "Smiles Davis",
      street: "600 montgomey St",
      cityStateZip: "San Francisco, CA 9858",
    },
    payment: {
      method: "Paypal",
      subtotal: 7000.0,
      shippingCost: 7800.0,
      taxAmount: 50.0,
    },
    totalItems: 3,
  };
  return (
    <div>
      <PageHeader
        title="Your Cart"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Confirmation",
            href: "/orderConfirmation",
          },
        ]}
      />
      <OrderConfirmed orderStatus={orderStatus} />
      <OrderDetails {...orderData} />
    </div>
  );
};

export default Page;
