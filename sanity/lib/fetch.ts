import { createClient } from "next-sanity";

const client = createClient({ 
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  useCdn: true,
});

export async function sanityFetch({query, params ={}}:{query:string, params?:any}) {
  const data = await client.fetch(query, params);
  return data;
}