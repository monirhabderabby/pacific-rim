"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  routes: string[];
  children: ReactNode;
}

const Hideon = ({ children, routes }: Props) => {
  const currentPath = usePathname();
  // Check if the current pathName starts with any hideRoutes item
  const shouldHideNavbar = routes.some((route) =>
    currentPath.startsWith(route)
  );

  // If the Navbar should be hidden, return null
  if (shouldHideNavbar) {
    return null;
  }
  return <div>{children}</div>;
};

export default Hideon;
