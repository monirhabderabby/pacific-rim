import Hero from "@/components/hero/Hero";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import Footer from "@/components/shared/footer/mainFooter/page";
import NewsletterPage from "@/components/shared/footer/newsletter/page";
import Navbar from "@/components/shared/header/mainHeader/page";
import Topbar from "@/components/shared/header/topHeader/page";
import AboutSection from "@/components/shared/sections/about-section";

const Page = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Topbar />
        <Navbar />
        <Hero />
        <PopularCategories />
        <AboutSection image="https://images.pexels.com/photos/28858556/pexels-photo-28858556/free-photo-of-serene-couple-walk-on-a-tranquil-beach.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <NewsletterPage />
      <Footer />
    </div>
  );
};

export default Page;
