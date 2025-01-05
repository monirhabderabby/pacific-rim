import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
  

 <section
      className="relative w-full h-[530px] bg-cover bg-center z-[-10] lg:px-20"
      style={{ backgroundImage: "url('assets/img/heroBg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center w-[670px] h-full text-white ">
        <div className="px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          SHARE THE  <br />
          BALANCE
          </h1>
          <p className="text-lg md:text-xl mb-8">
          SHRED is here to make your weed experience easier. It all started with three great flavor pre-milled blends. Since then, SHRED has expanded to include gummies, vapes, infused pre-rolls, and even hash!
          </p>
         
        </div>
      </div>
    </section>

{/* three image  */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-[1200px] mt-[-100px] z-50'>

<Image
      src="/assets/img/hero1.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
<Image
      src="/assets/img/hero2.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
<Image
      src="/assets/img/hero3.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />

</div>


    </div>
  )
}

export default Hero