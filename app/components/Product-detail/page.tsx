"use client"
import React from 'react'
import Image from 'next/image'
import { Product } from '@/types/products'
import { urlFor } from '@/sanity/lib/client'
import { useState } from 'react'


const ProductDetail = () => {
     const [products] = useState<Product[]>([]);
  return (
    <div>
         {products.map((product: Product) => (
          <div key={product._id} className="p-4 border-2 rounded-xl border-gray-200">
              <Image
                src={urlFor(product.image).url()}
                alt={product.title}
                width={100}
                height={100}
                className="w-full h-50 mb-2 rounded-xl"
              />
              <h3 className="text-2xl font-bold">{product.title}</h3>
              <p>{product.description}</p>
              <p className="mt-5 font-bold text-2xl ">${product.price}</p>
              <button className=" bg-white border text-black rounded-xl p-2 flex hover:duration-200 ml-auto -mt-8 hover:bg-gray-50 hover:text-black"
              >
              </button>
          </div>
        ))}
    </div>
  )
}

export default ProductDetail;
