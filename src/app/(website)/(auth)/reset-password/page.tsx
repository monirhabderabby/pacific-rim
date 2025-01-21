import dynamic from "next/dynamic";
import AuthUIProvider from "../_components/provider/AuthUIProvider";
const ResetPasswordContainer = dynamic(
  () => import("./_componments/container")
);

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/X7ywkKYd/e0ba46c9845debdbdfbf19f3d80aba56-1.png">
      <ResetPasswordContainer />
    </AuthUIProvider>
  );
};

export default Page;
