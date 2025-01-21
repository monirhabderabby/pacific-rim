import dynamic from "next/dynamic";
const ExperienceForm = dynamic(
  () => import("../../_components/experience-form"),
  {
    ssr: false,
  }
);

const Page = () => {
  return <ExperienceForm />;
};

export default Page;
