"use client"

import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';


function Categories() {
    const [category, setCategory] = useState("All Categories");

    const categories = [
        "All Categories",
        "Electronics",
        "Clothing",
        "Books",
        "Home & Garden",
        "Sports",
        "Toys",
        "Automotive",
    ]
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full mb-5 lg:mb-0 lg:w-[178px] h-[44px] text-white hover:text-white justify-between gap-2 bg-primary-green-hover hover:bg-primary-green focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                    {category}
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="flex flex-wrap py-5 w-[350px] lg:w-[1240px]">
                {categories.map((item) => (
                    <DropdownMenuItem
                        key={item}
                        onClick={() => setCategory(item)}
                        className='text-2xl'
                    >
                        {item}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Categories