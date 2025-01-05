import React from 'react'
import Image from "next/image";
const FindFavourite = () => {
  return (
       <div className="relative h-[600px] lg:h-[400px] max-w-[1125px] mx-auto py-24 overflow-hidden rounded-lg ">
            {/* Background Image */}
            <Image
              src="/assets/img/popularBg.png"
              alt="Laboratory background"
              fill
              className="object-cover brightness-75"
              priority
            />
    
            {/* Content Overlay */}
            <div className="relative z-10 flex h-full flex-col justify-center space-y-6 p-8 text-white">
              <h1 className="text-4xl font-bold sm:text-5xl">
                Find Your Favourite
              </h1>
    
              <p className="max-w-2xl text-lg">
                Our platform ensures that all participants have valid Cannabis
                Business licenses and that those licenses are in good standing with
                the respective agencies or authorities. In this way, transactions
                comply with local and international laws, giving local businesses a
                secure and reliable environment to operate within.
              </p>
    
              <button className="w-fit p-3 rounded-lg bg-green-700 hover:bg-green-800">
                Join Our Workspace today
              </button>
            </div>
          </div>
  )
}

export default FindFavourite