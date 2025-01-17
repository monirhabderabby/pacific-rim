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
  export interface StarRatingProps {
    rating: number;
    maxRating?: number;
  }
  export interface TimeUnitProps {
    value: string;
    label: string;
  }
  export interface BidInputProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  export interface CurrencySymbolProps {
    symbol: string;
  }
  export interface BidData {
    bidderName: string;
    biddingTime: string;
    bidAmount: string;
    isAuto?: boolean;
  }
  export type ReviewFormProps = Record<string, never>;
  export interface StarRatingProps {
    rating: number; // Current rating value
    onChange: (newRating: number) => void; // Callback when rating changes
    maxRating?: number; // Optional maximum number of stars (default is 5)
  }
  