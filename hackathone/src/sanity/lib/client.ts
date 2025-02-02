/*import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
*/
import { createClient, type ClientConfig } from "next-sanity";

const clientConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "41vx6pz3",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-02-02", // Replace with your API version
  useCdn: true, 
  //useCdn: false, // Set to true if you want to use the CDN
};

const client = createClient(clientConfig);

export default client;