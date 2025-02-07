"use client"
import Image from "next/image"
import { MapPin, Phone, Clock} from "lucide-react"
import Footer from "../Footer/Footer"

export default function Contact() {
return(
    <div className="">
        <div>
        <div className="flex flex-col justify-center items-center">
  <div className="font-bold text-3xl">Get In Touch With Us</div>
  <div className="font-poppins text-base font-light leading-6 text-center  underline-offset-2 decoration-skip-ink-none max-w-md mb-10">
    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
  </div>
</div>

        <div className="flex flex-col sm:flex-row  sm:mx-20">

             <div className="w-full sm:w-1/2">
                 <div className="flex flex-col  gap-10">
                 
                    <div className="flex gap-5">
                        <div>
                        <MapPin />
                        </div>
                        <div className="flex flex-col gap-0">
                            <div className="font-bold text-lg">Address</div>
                            <div>236 5th SE Avenue, New York </div>
                            <div>NY10000, United States</div>
                        </div>
                    </div>
                 
                   < div className="flex gap-5">
                        <div>
                       <Phone />
                        </div>
                        <div className="flex flex-col gap-0">
                            <div className="font-bold text-lg">Phone</div>
                            <div>Mobile: +(84) 546-6789
                            </div>
                            <div>Hotline: +(84) 456-6789</div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                    <div>
                       <Clock />
                        </div>
                        <div className="flex flex-col gap-0">
                            <div className="font-bold text-lg">Working Time</div>
                            <div>Monday-Friday:9:00-22:00
                            </div>
                            <div>Saturday-Sunday:9:00-21:00</div>
                        </div>
                    </div>
                 
                    </div>
             </div>

            <div className="w-full sm:w-1/2">
                
            <div className="flex flex-col gap-6 w-full max-w-md">
  <div className="flex flex-col rounded-lg">
    <label htmlFor="name" className="text-base font-semibold">
      Your name
    </label>
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  </div>
  <div className="flex flex-col rounded-lg">
    <label htmlFor="email" className="text-base font-semibold">
      Email address
    </label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  </div>
  <div className="flex flex-col rounded-lg">
    <label htmlFor="subject" className="text-base font-semibold">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      placeholder="Optional"
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  </div>
  <div className="flex flex-col rounded-lg">
    <label htmlFor="message" className="text-base font-semibold">
      Message
    </label>
    <textarea
      id="message"
      placeholder="Your message here"
      rows={4}
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
    ></textarea>
  </div>
  <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-teal-700">
    Submit
  </button>
           </div>

            </div>
          
        </div>

      
    </div>

    <div className="my-20 flex justify-center -mb-96">
  <div className="flex flex-col sm:flex-row gap-10">
    <div className="flex">
        <Image 
        src="/hackaton-images/Contact.png"
        alt=""
        width={1000}
        height={1000}/>
    </div>
  </div>
</div>
 <Footer />
    </div>

)
}

