"use client";
import { ReactNode } from "react";

interface Props {
  routes: string[];
  children: ReactNode;
  currentPath: string;
}

const Hideon = ({ children, routes, currentPath }: Props) => {
  // Check if the current pathName exactly matches or starts with any hideRoutes item (case-insensitive)
  const shouldHideNavbar = routes.some((route) =>
    currentPath.toLowerCase().startsWith(route.toLowerCase())
  );

  // If the Navbar should be hidden, return null
  if (shouldHideNavbar) {
    return null;
  }

  return <div>{children}</div>;
};

export default Hideon;
