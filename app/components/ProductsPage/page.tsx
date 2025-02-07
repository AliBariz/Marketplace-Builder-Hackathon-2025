"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import { ShoppingCart } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/client";
import { addToCart } from "@/app/components/actions/actions";
import { Product } from "@/types/products";
import Swal from "sweetalert2";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await sanityFetch({ query: allProducts });
      setProducts(data);
    };
    fetchProducts();
  }, []);
  
  const handleAddToCart = (e:React.MouseEvent, product:Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000
    });
    addToCart(product);
  }

  return (
    <div>
      <h1 className="text-3xl ml-10 mt-10 mb-10 font-bold text-left">Products</h1>
      {/* <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} /> */}
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-5 ">
        {products.map((product: Product) => (
          <div key={product._id} className="p-4 border-2 rounded-xl border-gray-200">
            <Link href={`/product/${product.slug.current}`}>
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
            </Link>
              <button className=" bg-white border text-black rounded-xl p-2 flex hover:duration-200 ml-auto -mt-8 hover:bg-gray-50 hover:text-black"
               onClick={(e) => handleAddToCart(e, product)}>
                <ShoppingCart />
              </button>
          </div>
        ))}
      </div>
      <div className="-mt-56">
        <Footer />
      </div>
    </div>
  );
}
