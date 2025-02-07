import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
  *[_type == "products"][0..10]{
    _id,
    title,
    description,
    price,
    slug,
    tags,
    "image": image.asset->url
  }
`);

export const allCategories = defineQuery(`
  *[_type == "categories"][0..2]{
     _id,
    title,
    description,
    price,
    tags,
    "image": image.asset->url
  }
`);