"use client";

// local import
import { fadeIn } from "@/components/animations/variant";
import { ButtonArrow } from "@/components/shared/button/ButtonArrow";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { featureProducts } from "@/data/featured";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurFeatureSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <motion.div ref={ref} className="section container py-[80px]">
      <SectionHeading heading="Our Featured Products" subheading="Products" />

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Start animation only when in view
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[17px] md:gap-[27px] pt-[40px]"
      >
        {featureProducts.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      <div className="mt-[40px] w-full flex justify-center items-center">
        <ButtonArrow text="Explore More" size="sm" href="/products" />
      </div>
    </motion.div>
  );
};

export default OurFeatureSection;
