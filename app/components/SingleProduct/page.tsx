import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Footer from "../Footer/Footer";

export default function Product() {
  return(  
   <div className="w-[90vw] h-auto  flex justify-center  items-center mx-auto py-20 flex-col ">
     <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
         <div className="  w-full sm:w-1/2 lg:w-1/3 ">
              <Image src="/hackaton-images/chair-pink.png" alt="Logo" width={500} height={500} />
            </div>
            <div className=" w-auto sm:w-1/2 flex  items-start flex-col gap-5 font-bold  ">
              <p></p>
              <span className="text-5xl">Library Stool</span>
              <span className="text-5xl">Chair</span>
              <span className="text-5xl"></span>
         
              <div className="relative w-max">
                <button className="bg-teal-600 text-white rounded-full p-2">$20.00 USD</button>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis voluptatum ut, tenetur nesciunt, praesentium consequatur dolorem, veritatis qui veniam aliquam et maiores reiciendis! A?</p>
              <div className="w-max">
                 <button className="flex bg-teal-600 text-white p-2 rounded-lg"><ShoppingCart /> Add To Cart</button>
              </div>
            </div>
     </div>
     <div>
         <div className="my-24 font-bold flex justify-between">
           <div>
               <p className="text-3xl">Featured Products</p>
           </div>
           <div>
               <button
                type="submit"
                className="w-[30vw] sm:w-[7vw] border-b-2 border-black focus:outline-none focus:ring-0 text-black"
                >
                     View all
                   </button>
           </div>
         </div>
            <div className="-mb-80 w-max">
            <div className="flex flex-col sm:flex-nowrap sm:flex-row justify-center gap-12 mx-auto my-5 overflow-x-auto">
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src="/hackaton-images/chair-black.png"
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src="/hackaton-images/chair-white.png"
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src="/hackaton-images/desk-chair.png"
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src="/hackaton-images/chair-orange.png"
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
           <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
             <Image
          src="/hackaton-images/chair-beige.png"
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
             />
           </div>
         </div>
         
            </div>
      </div>
        <Footer />
     </div>
    );

}