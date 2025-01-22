import AuthUIProvider from "@/app/(website)/(auth)/_components/provider/AuthUIProvider";
import dynamic from "next/dynamic";
const BusinessInfoForm = dynamic(
  () => import("./_components/business-info-form"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png">
      <BusinessInfoForm />
    </AuthUIProvider>
  );
};

export default Page;
