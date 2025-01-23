import React from "react";
import { ProductImage } from "./types";
import Image from "next/image";

interface ProductImageGalleryProps {
  thumbnails: ProductImage[];
  mainImage: ProductImage;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  thumbnails,
  mainImage,
}) => {
  return (
    <div className="flex flex-wrap gap-5 items-start w-full md:w-auto md:max-w-full">
      <div className="flex flex-row gap-5 w-full order-2 md:order-1 md:flex-col md:w-[180px] md:h-[186px]">
        {thumbnails.map((image, index) => (
          <Image
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            className="object-contain rounded-lg flex-1 h-auto md:w-[180px] md:h-full"
          />
        ))}
      </div>

      <Image
        loading="lazy"
        src={mainImage.src}
        alt={mainImage.alt}
        width={570}
        height={600}
        className="object-contain rounded-lg aspect-[0.95] order-1 md:order-2"
      />
    </div>
  );
};
