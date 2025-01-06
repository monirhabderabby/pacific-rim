// local import ***********
import OurAuction from "@/app/(website)/_components/our_auction";
import OurFeatureSection from "@/app/(website)/_components/our_feature_section";
import PersonalizedRecomendation from "@/app/(website)/_components/personalized-recomendatin";
import FindFavourite from "../FindFavourite";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import PopularCategoriesCard from "../shared/cards/PopularCategoriesCard";

const PopularCategories = () => {
  return (
    <div className="my-20 py-20 rounded-[16px]  lg:rounded-[52px] bg-primary-light">
      <SectionHeading
        subheading="Shop By Popular categories"
        heading="Popular categories"
      />

      {/*================= cardd ========================= */}
      <div className="container p-2 mx-auto ">
        <PopularCategoriesCard />
      </div>

      {/*///////////// find favourite if user not found then show it ///////////////////// */}

      <div className="px-4">
        <FindFavourite />
      </div>

      <div>
        <OurFeatureSection />
        <OurAuction />
      </div>

      <PersonalizedRecomendation />
    </div>
  );
};

export default PopularCategories;
