// local import 
import Image from "next/image";

// package import 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const PopularCategoriesCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px]   justify-items-center">
      {categories.map((category) => (
        <Card
          key={category.id}
          className="overflow-hidden w-full  lg:w-[270px] shadow-none "
        >
          <CardContent className=" p-[12px]">
            <div className="aspect-square relative">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover w-[246px] h-[204px]"
              />
            </div>
            <CardButtons />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PopularCategoriesCard;

// here are two button used for the same action. Please make sure two button are responsible for one work
const CardButtons = () => {
  return (
    <>
      <Button className="w-full  text-[14px] md:text-[16px] px-[16px] md:px-[20px] py-[8px] md:py-[10px]">
        Flowers
      </Button>
    </>
  );
};
