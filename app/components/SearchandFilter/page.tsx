// "use client";
// import {Product} from "@/types/products";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { searchProductsByName } from "@/sanity/lib/searchProducts";
// import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/client";

// const SearchPage = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
  
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const results = await searchProductsByName(query);
//         setProducts(results || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (query) fetchProducts();
//   }, [query]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-lg font-semibold text-gray-600">Loading products...</p>
//       </div>
//     );
//   }

//   if (!products.length) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
//           <h1 className="text-2xl font-bold mb-6 text-center">
//             No products found for: <span className="text-red-500">{query}</span>
//           </h1>
//           <p className="text-gray-600 text-center">
//             Try searching with different keywords.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Search Results for: <span className="text-blue-600">{query}</span>
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {products.map((product: Product) => (
//             <div key={product._id} className="p-4 border-2 rounded-xl border-gray-200">
//               <Link href={`/product/${product.slug.current}`} className="block">
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.title}
//                   width={200}
//                   height={200}
//                   className="w-full h-50 object-cover rounded-xl"
//                 />
//                 <h3 className="text-xl font-bold mt-2">{product.title}</h3>
//                 <p className="text-gray-600 text-sm">{product.description}</p>
//                 <p className="mt-3 font-bold text-lg text-blue-600">${product.price}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchPage;


// "use client";
// import { Search } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const router = useRouter();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (query.trim()) {
//       router.push(`/search?query=${encodeURIComponent(query)}`);
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <form onSubmit={handleSearch} className="flex -space-x-10">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for products..."
//           className="border rounded-full px-4 py-2 w-64"
//         />
//         <button
//           type="submit"
//           className=" text-gray-500 p-2 rounded-full hover:bg-gray-50 "
//         >
//           <Search />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;



"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Trigger search only if query is non-empty
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSearch} className="flex -space-x-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="border rounded-full px-4 py-2 w-64"
        />
        <button
          type="submit"
          className="text-gray-500 p-2 rounded-full hover:bg-gray-50"
        >
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
