import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { SearchBarProps } from "@/types/vendor"

export function SearchBar({ onSearch, totalResults }: SearchBarProps) {
  return (
    <div className="md:flex items-center justify-between w-full mx-auto py-2 my-8">
      <div className='my-2'>
       We now have <span  className="text-[#2A6C2D]"> {totalResults} </span>vendors.
      </div>
      
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full pl-10 pr-24 py-2 bg-white/10 border border-gray-300 rounded-lg"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button 
          className="absolute right-0 top-0 h-full px-4  bg-[#2A6C2D] hover:bg-[#235B26] text-white rounded-r-lg"
        >
          Search
        </Button>
      </div>
    </div>
  )
}

