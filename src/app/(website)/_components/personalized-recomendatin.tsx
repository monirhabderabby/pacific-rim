
// local import 
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
        <Button className="w-full max-w-[400px] mb-4  py-2">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default PersonalizedRecomendation;
