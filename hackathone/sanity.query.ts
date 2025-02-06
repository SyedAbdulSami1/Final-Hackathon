import client from "@/sanity/lib/client"
import { groq } from "next-sanity"
export async function GetData(){
    return client.fetch(
        groq`
        *[_type=="product"]{
        id,
        name,
        description,
        category,
        price,
        discountPercentage,
        stockLevel,
        "imageURL": image.asset->url
        }`
    )
}

// For product listing
export async function GetProducts() {
  return client.fetch(
    groq`*[_type=="product"]{
      _id,
      name,
      description,
      category,
      price,
      discountPercentage,
      stockLevel,
      "imageURLs": images[].asset->url
    }`
  )
}

// For single product
export async function GetProductData(id: string) {
  return client.fetch(
    groq`*[_type=="product" && _id == $id][0]{
      _id,
      name,
      description,
      category,
      price,
      discountPercentage,
      stockLevel,
      "imageURLs": images[].asset->url,
      sizes,
      reviews[]{
        user,
        rating,
        comment,
        date
      }
    }`,
    { id }
  )
}