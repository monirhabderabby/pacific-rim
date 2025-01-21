import AuthUIProvider from "../../../_components/provider/AuthUIProvider";
import { StateSelector } from "./_components/state-slector";

const Page = () => {
  return (
    <AuthUIProvider
      sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png"
      fullWidth
    >
      <StateSelector />
    </AuthUIProvider>
  );
};

export default Page;
