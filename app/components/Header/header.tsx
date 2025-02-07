import React from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <nav className="w-full border-b-2 p-4 ">
      
        <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-4 ml-16 text-gray-500 ">
            <Link href='/' className='hover:text-teal-500'>Home</Link>
            <Link href='/components/ProductsPage' className='hover:text-teal-500'>Shop</Link>
            <Link href="/components/ProductsPage" className='hover:text-teal-500'>Products</Link>
            <Link href='/components/SingleProduct' className='hover:text-teal-500'>Pages</Link>
            <Link href="/components/About" className='hover:text-teal-500'>About</Link>
            <Link href="/components/Contact" className='hover:text-teal-500'>Contact</Link>

        <p className="text-gray-700 ml-auto ">
            Contact: <span className="font-bold">(808) 555-0111</span>
          </p>
        </div>

          <Sheet>
            <SheetTrigger className='flex md:hidden ml-auto'>
                <Button variant={"ghost"} size={"icon"} className='rounded-full hover:bg-slate-200'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className='bg-white'>
                <SheetHeader>
                    <SheetTitle>Comforty</SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-6 mt-10'>
                <Link href={'/'} className='hover:text-teal-500'>Home</Link>
            <Link href='/components/ProductsPage' className='hover:text-teal-500'>Shop</Link>
            <Link href='/components/ProductsPage' className='hover:text-teal-500'>Product</Link>
            <Link href='/components/SingleProduct' className='hover:text-teal-500'>Pages</Link>
            <Link href='/components/About' className='hover:text-teal-500'>About</Link> 
            <Link href="/components/Contact" className='hover:text-teal-500'>Contact</Link>

            <p className="text-gray-700 mx-auto ">
            Contact: <span className="font-bold">(808) 555-0111</span>
          </p>
                </div> 
            </SheetContent>
          </Sheet>

    </nav>
  )
}

export default Header