// local import ***********
import OurAuction from "@/app/(website)/_components/our_auction";
import OurFeatureSection from "@/app/(website)/_components/our_feature_section";
import PersonalizedRecomendation from "@/app/(website)/_components/personalized-recomendatin";
import FindFavourite from "../../app/(website)/_components/FindFavourite";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import PopularCategoriesCard from "../shared/cards/PopularCategoriesCard";

interface Props {
  loggedin: boolean;
}

const PopularCategories = ({ loggedin }: Props) => {
  return (
    <div className=" pt-[54px]  pb-[40px] md:pb-[100px] section rounded-[16px]  lg:rounded-[52px] bg-primary-light ">
      <SectionHeading
        subheading="Popular categories"
        heading="Shop By Popular categories"
      />

      {/*================= cardd ========================= */}
      <div className="container mx-auto pt-[20px] md:pt-[30px] mb-[40px] lg:mb-[85px]">
        <PopularCategoriesCard />
      </div>

      {/*///////////// find favourite if user not found then show it ///////////////////// */}
      {!loggedin && (
        <div className="container ">
          <FindFavourite />
        </div>
      )}

      {loggedin && (
        <>
          <OurFeatureSection />
          <OurAuction />
          <PersonalizedRecomendation />
        </>
      )}
    </div>
  );
};

export default PopularCategories;
