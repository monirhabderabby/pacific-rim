import FAQSection from "@/components/faq-accordion";
import Hero from "@/components/hero/Hero";
import OrderConfirmed from "@/components/orderConfirmed/OrderConfirmed";
import OrderDetails from "@/components/orderDetails/OrderDetails";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import PopularBlogs from "@/components/shared/sections/popularBlogs/popularBlogs";
import CartPage from "@/components/shared/cart-page";
import { ClientReviews } from "@/components/shared/clientReview/ClientReview";
import Footer from "@/components/shared/footer/mainFooter/page";
import NewsletterPage from "@/components/shared/footer/newsletter/page";
import Navbar from "@/components/shared/header/mainHeader/page";
import Topbar from "@/components/shared/header/topHeader/page";
import SearchBerCategories from "@/components/shared/searchBerCategories/searchBerCategories";
import AboutSection from "@/components/shared/sections/about-section";

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
      <div className="min-h-screen">
        <Topbar />
        <Navbar />
        <SearchBerCategories />
        <Hero />
        <PopularCategories />
        <AboutSection image="https://images.pexels.com/photos/28s858556/pexels-photo-28858556/free-photo-of-serene-couple-walk-on-a-tranquil-beach.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <FAQSection />
        <ClientReviews />
      </div>
      <OrderConfirmed orderStatus={orderStatus} />
      <OrderDetails {...orderData} />
      <PopularBlogs />
      <NewsletterPage />
      <CartPage />
      <Footer />
    </div>
  );
};

export default Page;
