import React from "react";
import Image from "next/image";
import{
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube
  } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white border px-6 sm:px-12 lg:px-32 mt-96">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {/* Logo and Description */}
        <div>
        <div className="flex">
          <Image
            src={"/hackaton-images/green-sofa.png"}
            alt="Logo"
            width={30}
            height={30}
            />
             <h3 className="text-2xl font-bold text-gray-800">Comforty</h3>
        </div>
          <p className="text-gray-500 mt-2">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <FaFacebook className="w-9 h-9 text-teal-600 border border-teal-600 rounded-full p-2" />
            <FaTwitter className="w-9 h-9 p-2"/>
            <FaInstagram className="w-9 h-9 p-2"/>
            <FaPinterest className="w-9 h-9 p-2"/>
            <FaYoutube className="w-9 h-9 p-2"/>
          </div>

        </div>

        {/* Category */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">CATEGORY</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li className="text-teal-500 underline">Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">SUPPORT</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">NEWSLETTER</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-lg px-4 py-2 mb-4 text-gray-600"
            />
            <button className="w-50 p-2 ml-60 flex -mt-14 bg-teal-500 text-white py-2 rounded-full hover:rounded-xl">
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
        <p>@ 2024 - Blogy - Designed & Developed by Ali Bariz</p>
      </div>
    </footer>
  );
};

export default Footer;