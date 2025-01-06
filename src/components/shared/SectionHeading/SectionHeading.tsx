import Image from 'next/image'
import React from 'react'

interface Props {
    heading: string;
    subheading: string;
}

const SectionHeading = ({ heading, subheading }: Props) => {
  return (
    <div className='my-5  w-full mx-auto'>
            <p className='text-center text-2xl lg:text-5xl text-primary-green-hover font-semibold'> {subheading} </p>
            <h1 className='text-center font-medium text-xl lg:text-3xl text-primary-green-hover my-2'>{heading}</h1>
            
          <Image
          className='mx-auto'
                src="/assets/img/Line.png"
                width={80}
                height={80}
                alt="Picture of the author"
              />
        </div>
  )
}

export default SectionHeading

// Use it where needed

  // <SectionHeading subheading={"Shop By Popular categories"} heading={"Popular categories"} />

