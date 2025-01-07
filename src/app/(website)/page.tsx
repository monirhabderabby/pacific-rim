import FAQSection from "@/components/faq-accordion";
import Hero from "@/components/hero/Hero";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import CartPage from "@/components/shared/sections/cart-page";
import { ClientReviews } from "@/components/shared/clientReview/ClientReview";
import SearchBerCategories from "@/components/shared/searchBerCategories/searchBerCategories";
import AboutSection from "@/components/shared/sections/about-section";
import { PageHeader } from "@/components/shared/sections/breadcrumb-section";
import PopularBlogsCards from "@/components/shared/cards/PopularBlogsCards";

const Page = () => {
  const loggedin = false;

  return (
    <div>
      <div className="min-h-screen">
        <SearchBerCategories />
        
        <Hero />
        <PopularCategories loggedin={loggedin} />
        {!loggedin && (
          <AboutSection image="https://utfs.io/f/HkyicnKv4pLkKb11IfnzkrEA5LwVvWx2Fbfe7a6P94u0gcjZ" />
        )}
        {!loggedin && <FAQSection />}
        <ClientReviews />
      </div>

      <PopularBlogsCards />

      <CartPage />
      <PageHeader 
        title="Products" 
        items={[
          { label: "Our Products", href: "/products" },
          { label: "CBD", href: "/products/cbd" },
          {
            label: "PDP",
            href: ""
          }
        ]}
      />
    </div>
  );
};

export default Page;
