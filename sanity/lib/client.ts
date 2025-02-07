import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

const builder = imageUrlBuilder(client);
export const urlFor = (source : any) => builder.image(source);