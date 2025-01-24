// locatl  import ==================

import Hero from "@/components/hero/Hero";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import { ClientReviews } from "@/components/shared/clientReview/ClientReview";
import SearchBerCategories from "@/components/shared/searchBerCategories/searchBerCategories";
import AboutSection from "@/components/shared/sections/about-section";
import PopularBlog from "@/components/shared/sections/popularBlogs/popularBlogs";
import BestOffer from "./_components/best_offer";
import DealOfTheDay from "./_components/deal_of_the_day";

const Page = () => {
  const loggedin = true;
  return (
    <div>
      <div className="min-h-screen ">
        <SearchBerCategories />

        <Hero />
        <PopularCategories loggedin={loggedin} />
        {!loggedin && (
          <AboutSection image="https://utfs.io/f/HkyicnKv4pLkKb11IfnzkrEA5LwVvWx2Fbfe7a6P94u0gcjZ" />
        )}
        {/* {!loggedin && (
          <div className="pb-[160px]">
            <FAQSection />
          </div>
        )} */}
        {loggedin && <DealOfTheDay />}
        {loggedin && <PopularBlog />}
        {loggedin && <ClientReviews />}

        {loggedin && <BestOffer />}
      </div>
    </div>
  );
};

export default Page;
