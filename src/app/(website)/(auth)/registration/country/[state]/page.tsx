// Packages
// Local imports
import AuthUIProvider from "@/app/(website)/(auth)/_components/provider/AuthUIProvider";
import canadaFlag from "@/assets/flags/canada.png";
import usFlag from "@/assets/flags/us.png";
import { canadaProvinces, State, usStates } from "@/data/registration";
import { StaticImageData } from "next/image";
import { redirect } from "next/navigation";
import StateSelector from "./_components/state-slector";

const Page = ({ params }: { params: { state: string } }) => {
  const decodeUrl = (() => {
    try {
      return decodeURIComponent(params.state) as "United States" | "Canada";
    } catch {
      redirect(`/registration/country/${params.state}/business_information`);
    }
  })();

  let stats: State[] = [];

  let flag: StaticImageData = usFlag;

  if (decodeUrl === "United States") {
    stats = usStates;
  } else if (decodeUrl === "Canada") {
    stats = canadaProvinces;
    flag = canadaFlag;
  }

  return (
    <AuthUIProvider
      sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png"
      fullWidth
      backButton={false}
    >
      <StateSelector data={stats} flag={flag} currentState={decodeUrl} />
    </AuthUIProvider>
  );
};

export default Page;
