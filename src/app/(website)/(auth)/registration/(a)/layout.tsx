import { ReactNode } from "react";
import AuthUIProvider from "../../_components/provider/AuthUIProvider";

export default function ALayout({ children }: { children: ReactNode }) {
  return (
    <AuthUIProvider sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png">
      {children}
    </AuthUIProvider>
  );
}
