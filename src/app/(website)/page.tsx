// locatl  import ==================

import Hero from "@/components/hero/Hero";
import SearchBerCategories from "@/components/shared/searchBerCategories/searchBerCategories";

const Page = () => {
  return (
    <div>
      <div className="min-h-screen ">
        <SearchBerCategories />

        <Hero />
        {/* <PopularCategories loggedin={loggedin} />
        {!loggedin && (
          <AboutSection image="https://utfs.io/f/HkyicnKv4pLkKb11IfnzkrEA5LwVvWx2Fbfe7a6P94u0gcjZ" />
        )}
        {!loggedin && (
          <div className="pb-[160px]">
            <FAQSection />
          </div>
        )} */}
        {/* {loggedin && <DealOfTheDay />}
        {loggedin && <PopularBlog />}
        {loggedin && <ClientReviews />}

        {loggedin && <BestOffer />} */}
      </div>
    </div>
  );
};

export default Page;
