// Packages
import dynamic from "next/dynamic";

// Local imports
import AuthUIProvider from "../_components/provider/AuthUIProvider";
const ExperienceForm = dynamic(() => import("./_components/experience-form"), {
  ssr: false,
});

export default function Page() {
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png">
      <ExperienceForm />
    </AuthUIProvider>
  );
}
