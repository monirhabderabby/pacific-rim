// Packages
import dynamic from "next/dynamic";

// Local imports
const UserInformationForm = dynamic(
  () => import("../_components/UserInfoSignUp"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <UserInformationForm />;
}
