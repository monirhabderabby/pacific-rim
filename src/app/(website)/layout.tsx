import "@/app/globals.css";
import AppProvider from "@/components/providers/AppProvider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pacific Rim Fusion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={cn("antialiased", inter.className)}>
          {/* <div>
            <Navbar />
          </div> */}
          {/* <AgeRestrictionGuard>{children}</AgeRestrictionGuard> */}

          {children}

          {/* <div>
            <NewsletterPage />
            <Footer />
          </div> */}
          {/* <NProgress /> */}
          <Toaster />
        </body>
      </html>
    </AppProvider>
  );
}
