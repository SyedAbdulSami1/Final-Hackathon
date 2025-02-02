/*import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
*/
import { type ClientConfig, createClient } from "next-sanity";

const client: ClientConfig ={
    projectId: "41vx6pz3",
    dataset: "production",
    apiVersion: "2025-02-02",
    useCdn: false,
}
export default createClient(client)