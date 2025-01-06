import React from 'react'
import Image from "next/image";
import Link from "next/link";

// package import ###########
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-20  justify-items-center'>

{categories.map((category) => (
            <Card key={category.id} className="overflow-hidden w-full  lg:w-[270px]  ">
              <CardContent className=" ">
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover w-[246px] h-[204px]"
                  />
                </div>
                <Link
                  key={category.title}
                  href="categories"
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
  )
}

export default PopularCategoriesCard