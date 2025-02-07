import React from 'react'
import { Check, ChevronDown, Info } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from 'next/link'
  

const topbar = () => {
  return (
    <div className="bg-slate-800 text-gray-400 text-sm py-2 hidden md:flex justify-between items-center px-14">
        <p className='flex text-sm'><Check />Free Shipping On All Orders Over $50</p>
        <div className="flex items-center gap-4">
          {/* <span className='flex'>Eng */}
          <DropdownMenu>
  <DropdownMenuTrigger className='flex'>Eng <ChevronDown /></DropdownMenuTrigger>
  <DropdownMenuContent className='bg-black text-white'>
    <DropdownMenuLabel>Languages</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Urdu</DropdownMenuItem>
    <DropdownMenuItem>Spanish</DropdownMenuItem>
    <DropdownMenuItem>Arabic</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          {/* </span> */}

          <Link href="/components/Faq" className='hover:underline'>FAQs</Link>
          <a href="#" className="text-gray-400 flex gap-1 hover:underline"> <Info />Need Help</a>
        </div>
      </div>
        )
      }

export default topbar