import dynamic from "next/dynamic";
import AuthUIProvider from "../../_components/provider/AuthUIProvider";
const CountrySelector = dynamic(
  () => import("./_components/country-selector"),
  { ssr: false }
);

const Page = () => {
  return (
    <AuthUIProvider
      sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png"
      fullWidth
    >
      <h1 className="text-[36px] font-semibold leading-[43.2px] text-primary text-center ">
        Select Any Country
      </h1>
      <p className="text-[12px] leading-[14.4px] font-normal text-[#6D6D6D] text-center mb-[30px]">
        Choose Your Business Country .
      </p>
      <CountrySelector />
    </AuthUIProvider>
  );
};

export default Page;
