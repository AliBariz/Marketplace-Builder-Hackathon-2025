import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 

const HeroSection: React.FC = () => {
  return (
    <center>
    <div className="flex items-center justify-between border rounded bg-gray-100 p-8 h-[500px] w-[600px] border-b-2 mb-8 pb-16 md:[45%] sm:[20%]">
      {/* Text Section */}
      <div className="max-w-lg">
        <h3 className="text-sm text-gray-500 mb-2 left-5 uppercase">Welcome to Chairy</h3>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Best Furniture Collection For Your Interior
        </h1>
        <Link href={'/components/ProductsPage'}>
         <button className="bg-teal-700 text-white px-4 py-2 rounded flex mr-auto ml-10 mt-10 ">
           Shop Now
         <ArrowRight className="hover:ml-2 hover:duration-200"/>
        </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="/hackaton-images/chair-top.png" // Replace with the actual chair image filename
          alt="Chair"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
    {/* Company Names pic */}
    <div>
      <Image src="/hackaton-images/company-images.png" 
      alt="image"
      width={1000}
      height={1000} />
    </div>
    </center>

  );
};

export default HeroSection;
