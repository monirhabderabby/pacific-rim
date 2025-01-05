import Image from "next/image";
import Link from "next/link";

// package import ###########
import { Card, CardContent } from "@/components/ui/card";

// local import ***********
import SectionHeading from "../shared/SectionHeading/SectionHeading";

// category type ////
interface CategoryCard {
  id: number;
  title: string;
  image: string;
  href: string;
}

// category array data -------
const categories: CategoryCard[] = [
  {
    id: 6,
    title: "Flowers",
    image: "/assets/img/popularCategori.png",
    href: "/categories/flowers",
  },
  {
    id: 5,
    title: "Concentrates",
    image: "/assets/img/popularCategori.png",
    href: "/categories/concentrates",
  },
  {
    id: 1,
    title: "Edibles",
    image: "/assets/img/popularCategori.png",
    href: "/categories/edibles",
  },
  {
    id: 99,
    title: "Topicals",
    image: "/assets/img/popularCategori.png",
    href: "/categories/topicals",
  },
];

const PopularCategories = () => {
  return (
    <div className="my-20 py-20 rounded-[52px] bg-primary-light">
      <SectionHeading
        subheading="Shop By Popular categories"
        heading="Popular categories"
      />

      {/*================= cardd ========================= */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  key={category.title}
                  href={category.href}
                  className="block transition-transform "
                >
                  <div className="bg-[#1B4D2B] hover:bg-[#1B4D2B]/80 p-4 text-center rounded-lg">
                    <h3 className="text-white font-medium ">
                      {category.title}
                    </h3>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/*///////////// find favourite if user not found then show it ///////////////////// */}
      <div className="relative h-[400px] max-w-[1125px] mx-auto py-24 overflow-hidden rounded-lg">
        {/* Background Image */}
        <Image
          src="/assets/img/popularBg.png"
          alt="Laboratory background"
          fill
          className="object-cover brightness-75"
          priority
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full flex-col justify-center space-y-6 p-8 text-white">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Find Your Favourite
          </h1>

          <p className="max-w-2xl text-lg">
            Our platform ensures that all participants have valid Cannabis
            Business licenses and that those licenses are in good standing with
            the respective agencies or authorities. In this way, transactions
            comply with local and international laws, giving local businesses a
            secure and reliable environment to operate within.
          </p>

          <button className="w-fit p-3 rounded-lg bg-green-700 hover:bg-green-800">
            Join Our Workspace today
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
