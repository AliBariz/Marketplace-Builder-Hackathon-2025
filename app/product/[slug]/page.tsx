import { client } from "@/sanity/lib/client";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
    params : Promise<{slug : string}>
}

async function getProduct(slug:string): Promise <Product> {
    return client.fetch (
        groq `*[_type == "products" && slug.current == $slug][0]{
        _id,
        title,
        _type,
        image,
        description,
        price,

        }`, {slug}
    )
    
}

export default async function ProductPage({params} : ProductPageProps){
    const {slug} = await params;
    const product = await getProduct(slug)

    return(
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-10 ml-20">Product Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-5">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-xl">
            {product && product.image ? (
              <Image
                src={urlFor(product.image).url()}
                alt={product.title}
                width={400} 
                height={400} 
                className="object-cover transform transition-transform duration-300 hover:scale-110 ml-20"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>
      
          {/* Product Details */}
          <div className="flex flex-col gap-6 mr-32">
            <h1 className="text-3xl font-bold text-gray-800">{product?.title}</h1>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold text-green-600">${product?.price}</p>
              <span className="text-sm text-gray-500 line-through">${(product?.price * 1.2).toFixed(2)}</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">{product?.description}</p>
      
            {/* Add to Cart Section */}
            <div className="mt-6">
            <Link href="/components/ProductsPage" className='w-full rounded-full bg-teal-600 hover:bg-teal-700 text-white p-2 flex items-center justify-center'>
    <button>
      Add to Cart
    </button>
    </Link>
            </div>
          </div>
        </div>
      </div>
      
    )
}
