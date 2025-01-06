import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SearchBer() {
    return (
        <form className="flex flex-1 gap-2 w-full lg:w-[772px] border-1 border-primary-green outline-0">
            <div className="flex-1 relative">
                <div className='flex items-center'>
                    <Search className="absolute left-2.5 top-2.4 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search"
                        className="pl-8 py-[20px] border-2 border-primary-green-hover "
                    />
                </div>
                <Button className="bg-[#2B6B39] hover:bg-[#225430] w-[105px] py-[22px] absolute right-0 top-0">
                    Search
                </Button>
            </div>

        </form>
    )
}

export default SearchBer