import Image from "next/image";
import Footer from "../Footer/Footer";
// import { Truck, CreditCard, CircleCheck, Sprout } from "lucide-react";


export default function About() {
    return (
        <div>
          <div className="flex flex-col md:flex-row gap-10 mx-10 items-center justify-center my-10">
            <div className="w-full sm:w-1/2 min-h-[50vh] my-10 sm:min-h-[40vw] flex flex-col items-center gap-20 justify-center bg-teal-600">
            
            <div className="w-full sm:w-[90%] mx-auto gap-10">
              <div className="flex justify-start">
                <p className="text-2xl font-bold text-white">About-Us Comforty</p>
              </div>
              <div className="flex justify-start my-5">
                <p className="text-white mr-10 ">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. 
                </p>
              </div>
            </div>
          
            <div className="w-full sm:w-[90%] mx-auto flex justify-start">
            <button className="bg-teal-500 text-white p-2">
              View Collection
            </button>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2 min-h-[50vh] my-10 sm:min-h-[40vw] relative">
            <Image
              src="/hackaton-images/chair-white.png"
              alt="View"
              layout="fill"
              // width={100}
              // height={100}
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
          </div>

          <div className="my-14 mx-10 flex flex-col gap-10 " >
  <div>
    <p className="text-4xl font-bold text-center">What Made Our Brand Different</p>
  </div>
<div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-4">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="text-teal-600 text-4xl mb-4">🚚</div>
        <h2 className="text-2xl font-bold mb-2">Next-day as standard</h2>
        <p className="text-gray-700">Order before 3pm and get your order the next day as standard</p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="text-teal-600 text-4xl mb-4">🔨</div>
        <h2 className="text-2xl font-bold mb-2">Made by true artisans</h2>
        <p className="text-gray-700">Handmade crafted goods made with real passion and craftmanship</p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="text-teal-600 text-4xl mb-4">💳</div>
        <h2 className="text-2xl font-bold mb-2">Unbeatable prices</h2>
        <p className="text-gray-700">For our materials and quality you won&apos;t find better prices anywhere</p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="text-teal-600 text-4xl mb-4">♻️
        </div>
        <h2 className="text-2xl font-bold mb-2">Recycled packaging</h2>
        <p className="text-gray-700">We use 100% recycled to ensure our footprint is more manageable</p>
    </div>
</div>
          </div>

          <div className="my-14 mx-10 flex flex-col gap-10" >
  <div>
    <p className="text-4xl font-bold text-center">Our Popular Products</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 -mb-96">
    <div className=" p-6 col-span-2">
        <div className="text-teal-600 text-4xl mb-4 hover:transition-transform ease-in-out duration-200">
            <Image
                src="/hackaton-images/green-sofa-big.png"
                alt=""
                layout="responsive"
                width={500}  
                height={500}
                />
        </div>
                <p>The Poplar Suede Sofa</p>
                <p>$99.00</p>
    </div>
    <div className="p-6">
        <div className="text-teal-600 text-4xl mb-4">
            <Image
                src="/hackaton-images/black-chair2.png"
                alt=""
                layout="responsive"
                width={500} 
                height={500}
            />
        </div>
        <p>The Dandy Chair</p>
        <p>$99.00</p>
    </div>
    <div className="p-6">
        <div className="text-teal-600 text-4xl mb-4">
            <Image
                src="/hackaton-images/black-bg-chair.png"
                alt=""
                layout="responsive"
                width={500} 
                height={500}
            />
        </div>
        <p>The Dandy Chair</p>
         <p>$99.00</p>
    </div>
</div>

</div>
<Footer />
</div>
    );
}