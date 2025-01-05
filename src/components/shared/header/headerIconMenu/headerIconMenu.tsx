import React from 'react'
import { Bell, CircleUserRound, Heart, ShoppingCart } from 'lucide-react';

function HeaderIconMenu() {
    return (
        <>
            <button
                type="button"
                className="relative rounded-full p-1 mr-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <Bell aria-hidden="true" className="size-6" />
            </button>
            <button
                type="button"
                className="relative rounded-full p-1 mr-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <Heart aria-hidden="true" className="size-6" />
            </button>
            <button
                type="button"
                className="relative rounded-full p-1 mr-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <ShoppingCart aria-hidden="true" className="size-6" />
            </button>
            <button
                type="button"
                className="relative rounded-full p-1 text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <CircleUserRound aria-hidden="true" className="size-6" />
            </button></>
    )
}

export default HeaderIconMenu