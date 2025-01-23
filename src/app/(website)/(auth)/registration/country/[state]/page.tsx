// Packages
// Local imports
import AuthUIProvider from "@/app/(website)/(auth)/_components/provider/AuthUIProvider";
import { canadaProvinces, State, usStates } from "@/data/registration";
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

  if (decodeUrl === "United States") {
    stats = usStates;
  } else if (decodeUrl === "Canada") {
    stats = canadaProvinces;
  }

  return (
    <AuthUIProvider
      sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png"
      fullWidth
      backButton={false}
    >
      <StateSelector data={stats} />
    </AuthUIProvider>
  );
};

export default Page;
