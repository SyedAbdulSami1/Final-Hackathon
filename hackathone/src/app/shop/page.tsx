import Shopheader from "@/components/shopheader"
import Arlist from "@/components/arlist"
import Feseli from "@/components/feseli"
import Shopcard from "@/components/shopcard"
import { Suspense } from "react"

export default function Shop() {
  return (
    <div>
      <Shopheader />
      <Arlist />
      <Suspense fallback={<div>Products are loading...</div>}>
        <Shopcard />
      </Suspense>
      <Feseli />
    </div>
  )
}

