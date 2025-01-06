import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/button";

const PersonalizedRecomendation = () => {
  return (
    <div className="section container">
      <SectionHeading
        heading="See Personalized Recommendations"
        subheading="For more Products"
      />

      <div className="mt-4 flex justify-center">
        <Button className="w-full max-w-[400px] mb-4 bg-[#37783B] hover:bg-[#2c6130] text-white font-semibold py-2">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default PersonalizedRecomendation;
