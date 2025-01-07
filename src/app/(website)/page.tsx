import FAQSection from "@/components/faq-accordion";
import Hero from "@/components/hero/Hero";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import { ClientReviews } from "@/components/shared/clientReview/ClientReview";
import SearchBerCategories from "@/components/shared/searchBerCategories/searchBerCategories";
import AboutSection from "@/components/shared/sections/about-section";
import PopularBlogs from "@/components/shared/sections/popularBlogs/popularBlogs";

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

      <PopularBlogs />
    </div>
  );
};

export default Page;
