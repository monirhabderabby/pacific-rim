// Packages
import dynamic from "next/dynamic";

// Local imports
const ExperienceForm = dynamic(() => import("../_components/experience-form"), {
  ssr: false,
});

export default function Page() {
  return <ExperienceForm />;
}
