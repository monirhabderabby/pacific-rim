// Packages
import dynamic from "next/dynamic";
// Local imports
import AuthUIProvider from "@/app/(website)/(auth)/_components/provider/AuthUIProvider";
const StateSelector = dynamic(() => import("./_components/state-slector"), {
  ssr: false,
});

const Page = ({ params }: { params: { state: string } }) => {
  const decodeString = decodeURIComponent(params.state) as
    | "United States"
    | "Canada";
  return (
    <AuthUIProvider
      sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png"
      fullWidth
      backButton={false}
    >
      <StateSelector currentState={decodeString} />
    </AuthUIProvider>
  );
};

export default Page;
