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
import Link from 'next/link';


function Categories() {
    const [category, setCategory] = useState("All Categories");

    const categories = [
        { name: "Flower", link: "#" },
        { name: "Topicals", link: "#" },
        { name: "Apparel", link: "#" },
        { name: "Concentrates", link: "#" },
        { name: "Tinctures", link: "#" },
        { name: "Accessories", link: "#" },
        { name: "Vape Products", link: "#" },
        { name: "Edibles",  link: "#" },
    ];
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="mb-2 lg:mb-0 w-[178px] h-[44px] text-white hover:text-white justify-between gap-2 bg-primary hover:bg-primary-green focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                    {category}
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                className="w-[180px] rounded-lg p-0 font-medium leading-[24px] text-black mt-[60px] lg:mt-[10px]"
            >
                {categories.map((item) => (
                    <DropdownMenuItem
                    className='w-full p-0'
                    key={item.name}
                    onClick={() => setCategory(item.name)}
                    >
                        <Link className='w-full text-[20px] p-4 hover:bg-primary-light' href={item.link} >
                        {item.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Categories