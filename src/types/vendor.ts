export interface VendorInfo {
  id: number
  name: string
  followers: number
  rating: number
  address: string
  phone: string
  email: string
  imageUrl: string
}

export interface SearchBarProps {
  onSearch: (query: string) => void
  totalResults: number
}

export interface VendorCardProps {
  vendor: VendorInfo
}

