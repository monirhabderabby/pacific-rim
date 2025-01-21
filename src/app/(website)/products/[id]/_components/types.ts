export interface ProductImage {
    src: string;
    alt: string;
  }
  
  export interface SizeOption {
    value: string;
    isSelected: boolean;
  }
  
  export interface ProductData {
    title: string;
    store: string;
    rating: number;
    price: number;
    originalPrice: number;
    description: string;
    sizes: SizeOption[];
    images: ProductImage[];
    mainImage: ProductImage;
  }
  // export interface StarRatingProps {
  //   rating: number;
  //   maxRating?: number;
  // }
  export type ReviewFormProps = Record<string, never>;
  export interface StarRatingProps {
    rating: number; // Current rating value
    onChange?: (newRating: number) => void; // Callback when rating changes
    maxRating?: number; // Optional maximum number of stars (default is 5)
  }
  