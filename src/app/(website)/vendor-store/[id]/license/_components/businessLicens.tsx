import Image from 'next/image'
import React from 'react'

function BusinessLicens() {
  return (
        <div className="w-full border-[1px] border-[#C5C5C5] rounded-2xl">
            <div className="border-b-[1px] border-[#C5C5C5]">
                <h1 className="text-[32px] leading-[38.4px] p-[20px] font-semibold text-[#2A6C2D]">License Information</h1>
            </div>
            <div className='p-[20px]'>
                <h4 className='text-[#444444] text-[22px] leading-[26.4px] font-normal'><span className='text-black mr-[8px] font-medium'>License Number:</span>666666666666</h4>
                <h4 className='text-black text-[22px] leading-[26.4px] font-medium my-[8px]'>License Image:</h4>
                <Image 
                    height={450}
                    width={240}
                    src="https://utfs.io/f/HkyicnKv4pLkPTppIqbBiT8gFA2Wp9JkLtc5ZdKlhCyNY0vX"
                    alt="profile "
                    className="w-[450px] h-[240px] rounded-[12px] mt-3"
                />
            </div>
        </div>
  )
}

export default BusinessLicens