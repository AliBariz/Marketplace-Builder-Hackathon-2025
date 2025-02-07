"use client"
import React from 'react'
import { ShoppingCart, Sofa, } from 'lucide-react'
import Link from 'next/link'
import SearchBar from '../SearchandFilter/page'



const Navbar = () => {
  return (
    <div className="bg-gray-100 py-4 flex justify-between items-center px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 ml-12">
          <div className='text-teal-500'>
          <Sofa />
          </div>
          <Link href="/"><h1 className="text-2xl font-bold">Comforty</h1></Link>
        </div>
        <div className="flex items-center gap-8">
          <div className="relative flex items-center gap-2">
          <SearchBar />
            <div className="bg-white border rounded-xl p-2 flex gap-2 hover:bg-gray-50 hover:duration-200">
              <Link href="/components/Cart">
             <ShoppingCart />
            <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
              </Link>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Navbar
