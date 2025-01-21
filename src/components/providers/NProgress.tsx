"use client";
// package import
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="3px"
      color="#00417E"
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
