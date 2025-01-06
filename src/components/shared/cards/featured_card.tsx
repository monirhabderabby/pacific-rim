import { FeatureCardType } from "@/data/featured";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function FeaturedProductCard({
  product,
}: {
  product: FeatureCardType;
}) {
  return (
    <div className="flex overflow-hidden relative flex-col grow shrink self-stretch p-3 my-auto mx-auto bg-white rounded-xl border border-gray-200 border-solid w-full md:w-[260px]">
      <div>
        <Image
          loading="lazy"
          src={product.image}
          alt="Product image"
          width={300}
          height={100}
          className="object-contain z-0 w-full rounded-lg aspect-[1.07]"
        />
      </div>
      <div className="flex absolute top-5 z-0 flex-col w-8 right-[22px]">
        <button className="flex gap-2.5 items-center p-2 w-full h-8 bg-white hover:bg-white/90 rounded-[30px]">
          <Heart />
        </button>
      </div>
      <div className="flex z-0 flex-col mt-2 w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-10 justify-between items-center w-full">
            <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-tight text-red-600 whitespace-nowrap">
              <div className="flex gap-1 items-center self-stretch my-auto">
                <Image
                  loading="lazy"
                  width={9}
                  height={9}
                  src="/assets/svg/hot.svg"
                  alt="hot icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] fill-red-600 w-[9px]"
                />
                <div className="self-stretch my-auto">Hot</div>
              </div>
            </div>
            <div className="flex gap-1 items-start self-stretch my-auto">
              {[1, 2, 3, 4].map((star) => (
                <Image
                  key={star}
                  loading="lazy"
                  src="/assets/svg/star-fill.svg"
                  alt="star fill"
                  height={12}
                  width={12}
                  className="object-contain shrink-0 w-3 aspect-square fill-amber-500"
                />
              ))}
              <Image
                loading="lazy"
                src="/assets/svg/star-outline.svg"
                alt="star outline"
                height={12}
                width={12}
                className="object-contain shrink-0 w-3 aspect-square fill-stone-300"
              />
            </div>
          </div>
          <div className="mt-2 text-base font-medium leading-tight text-green-800">
            American Beauty
          </div>
          <div className="flex gap-1 items-end self-start mt-2 font-medium leading-tight">
            <div className="self-stretch text-base whitespace-nowrap text-zinc-900">
              ₿{product.price}
            </div>
            <div className="self-stretch text-xs text-neutral-400">
              <span className="line-through">₿{product.originalPrice}</span>
            </div>
          </div>
        </div>
        <button
          className="gap-2.5 self-stretch px-6 py-3 mt-4 w-full text-base font-medium leading-tight text-white bg-green-800 rounded-lg max-md:px-5"
          aria-label="Add to cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
