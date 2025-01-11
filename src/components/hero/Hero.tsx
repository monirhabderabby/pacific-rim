import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section
        className="relative w-full h-[430px] lg:h-[530px] bg-cover bg-center z-[-10] lg:px-20"
        style={{
          backgroundImage: `url(assets/img/heroBg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat", // Ensure seamless background
          animation: "moveBackground 30s linear infinite alternate", // Alternate animation direction
          top: 0,
          left: 0,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container z-10 flex items-center justify-start   h-full text-white ">
          <div className="md:w-[670px]">
            <h1 className="text-[32px] leading-[38.4px] lg:text-[56px] lg:leading-[67.2px] font-semibold mb-4">
              SHARE THE <br />
              BALANCE
            </h1>
            <p className="text-[16px] md:text-[18px] mb-8">
              SHRED is here to make your weed experience easier. It all started
              with three great flavor pre-milled blends. Since then, SHRED has
              expanded to include gummies, vapes, infused pre-rolls, and even
              hash!
            </p>
          </div>
        </div>
      </section>

      {/* three image  */}
      <div className="grid grid-cols-3 gap-4 lg:gap-[24px] mx-auto max-w-[1200px] mt-[-50px] lg:mt-[-100px] z-50 justify-items-center p-2">
        <div className="h-[130px] w-[103px] md:w-[200px] md:h-[220px] lg:h-[300px] lg:w-[370px]  rounded-[16px] relative">
          <Image
          
            src="/assets/img/hero1.png"
            alt="Picture of the author"
            className="rounded-[16px]"
            fill
            priority
          />
        </div>
        <div className="h-[130px] w-[103px] md:w-[200px] md:h-[220px] lg:h-[300px] lg:w-[370px]  rounded-[16px] relative">
          <Image
            src="/assets/img/hero2.png"
            alt="Picture of the author"
            className="rounded-[16px]"
            fill
            priority
          />
        </div>
        <div className="h-[130px] w-[103px] md:w-[200px] md:h-[220px] lg:h-[300px] lg:w-[370px]  rounded-[16px] relative">
          <Image
            src="/assets/img/hero3.png"
            alt="Picture of the author"
            className="rounded-[16px]"
            fill
            priority
          />
        </div>
      </div>

      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 100%; /* Ends at this position */
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }       
        `}
      </style>
    </div>
  );
};

export default Hero;
