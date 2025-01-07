import React from "react";
import { ProductImage } from "./types";
import Image from "next/image";

interface ProductImageGalleryProps {
  thumbnails: ProductImage[];
  mainImage: ProductImage;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ thumbnails, mainImage }) => {
  return (
    <div className="flex flex-wrap gap-5 items-start self-start min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-[180px]">
        {thumbnails.map((image, index) => (
          <Image
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            width={180}
            height={186}
            className={`object-contain rounded-lg aspect-[0.97] ${
              index > 0 ? 'mt-5' : ''
            }`}
          />
        ))}
      </div>
      <Image
        loading="lazy"
        src={mainImage.src}
        alt={mainImage.alt}
        width={570}
        height={600}
        className="object-contain rounded-lg aspect-[0.95] "
      />
    </div>
  );
};