"use client";
// local import
import Image from "next/image";

// package import
import { fadeIn } from "@/components/animations/variant";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate={inView ? "show" : "hidden"} // Start animation only when in view
      viewport={{ once: false, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[13px]   justify-items-center"
      ref={ref}
    >
      {categories.map((category, i) => (
        <Card
          key={category.id}
          className="overflow-hidden w-full  lg:w-[270px] shadow-none "
        >
          <CardContent className=" p-[12px]">
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(1px)",
              }}
              animate={{
                opacity: inView ? 1 : 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.5,
                  delay: i * 0.2,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className="aspect-square relative"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover w-[246px] h-[204px]"
              />
            </motion.div>
            <CardButtons />
          </CardContent>
        </Card>
      ))}
    </motion.div>
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
