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