// Packages
// Local imports
import AuthUIProvider from "@/app/(website)/(auth)/_components/provider/AuthUIProvider";

const Page = ({ params }: { params: { state: string } }) => {
  const decodeString = (() => {
    try {
      return decodeURIComponent(params.state) as "United States" | "Canada";
    } catch (err) {
      console.error("Error decoding state:", err);
      return "United States"; // Fallback value
    }
  })();

  console.log(decodeString);

  return (
    <AuthUIProvider
      sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png"
      fullWidth
      backButton={false}
    >
      {/* <StateSelector currentState={decodeString} /> */}
      fsd
    </AuthUIProvider>
  );
};

export default Page;
