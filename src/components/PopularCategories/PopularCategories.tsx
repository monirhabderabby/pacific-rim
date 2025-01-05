

// local import ***********
import FindFavourite from "../FindFavourite";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import PopularCategoriesCard from "../shared/cards/PopularCategoriesCard";



const PopularCategories = () => {
  return (
    <div className="my-20 py-20 px-5 rounded-[52px] bg-primary-light">
      <SectionHeading
        subheading="Shop By Popular categories"
        heading="Popular categories"
      />

      {/*================= cardd ========================= */}
      <div className="container mx-auto p-4">
      <PopularCategoriesCard/>
       
      </div>

      {/*///////////// find favourite if user not found then show it ///////////////////// */}

      <FindFavourite/>

     
    </div>
  );
};

export default PopularCategories;
