import { ForgotPasswordForm } from "../_components/forms/forgot-password-form";
import AuthUIProvider from "../_components/provider/AuthUIProvider";

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/X7ywkKYd/e0ba46c9845debdbdfbf19f3d80aba56-1.png">
      <ForgotPasswordForm />
    </AuthUIProvider>
  );
};

export default Page;
