import dynamic from "next/dynamic";
const ProfessionChecker = dynamic(
  () => import("./_components/profession-checker"),
  { ssr: false }
);

const page = () => {
  return <ProfessionChecker />;
};

export default page;
