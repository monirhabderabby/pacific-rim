import AuthUIProvider from "@/app/(website)/(auth)/_components/provider/AuthUIProvider";
import { BusinessInfoForm } from "./_components/business-info-form";

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png">
      <BusinessInfoForm />
    </AuthUIProvider>
  );
};

export default Page;
