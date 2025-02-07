import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-row p-6 mt-10 pt-20 ml-20 pl-40  md:mt-20 sm:mt-28 md:mb-20 sm:mb-28">
      {/* Left Column */}
      <div className="flex flex-col items-center justify-center w-1/3">
      <div className='mt-28'>
      </div>
        <h2 className="text-lg writing-mode-ho-rl -rotate-90 -ml-96 my-12">
          EXPLORE NEW AND POPULAR STYLES
        </h2>
        <div className="mr-5 mb-5 pb-10 -mt-56">
          <Image
            src="/hackaton-images/chair-orange.png" // Replace with your image path
            alt="Orange Chair"
            width={500}
            height={500}
            className=''
          />
        </div>
        </div>

      {/* Right Column */}
      <div className="flex flex-col w-2/3 gap-4">
        {/* Top Row */}
        <div className="flex flex-row gap-4">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/hackaton-images/chair-white2.png" // Replace with your image path
              alt="White Chair"
              width={150}
              height={150}
              />
            <div>
            </div>
          </div>
          <div>
            <Image
              src="/hackaton-images/chair-white.png" // Replace with your image path
              alt="Vintage Chair"
              width={150}
              height={150}
              />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-row gap-4">
          <div>
            <Image
              src="/hackaton-images/chair-beige.png" // Replace with your image path
              alt="Gray Chair"
              width={150}
              height={150}
              />
          </div>
          <div>
            <Image
              src="/hackaton-images/chair-white.png" // Replace with your image path
              alt="Vintage Chair"
              width={150}
              height={150}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
