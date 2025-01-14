export interface ReviewCardProps {
  name: string;
  role: string;
  avatarSrc: string;
  rating: number;
  title: string;
  review: string;
}

export interface NavigationButtonProps {
  direction: "prev" | "next";
  iconSrc: string;
  onClick: () => void;
}

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
}
