import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";

// Fetch products based on search parameters
export async function searchProductsByName(query: string): Promise<Product[]> {
  // Construct the query
  const PRODUCTS_BY_SEARCH = `
    *[_type == "products" && (title match $name || $tags in tags)]`;

  try {
    // Execute the query
    const products = await client.fetch(PRODUCTS_BY_SEARCH, {
      name: query || "", // Match title with the query
      tags: query || "", // Check if tags match the query
    });
    return products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}