import dynamic from "next/dynamic";
import AuthUIProvider from "../_components/provider/AuthUIProvider";

const LoginForm = dynamic(() => import("./_components/login-form"), {
  ssr: false,
});

const Page = () => {
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/X7ywkKYd/e0ba46c9845debdbdfbf19f3d80aba56-1.png">
      <LoginForm />
    </AuthUIProvider>
  );
};

export default Page;
