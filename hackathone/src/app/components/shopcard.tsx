import Image from "next/image"

const products = [
  { id: 1, name: "Trenton modular sofa_3", price: 25000, image: "/images/Trenton modular sofa_3 1.png" },
  { id: 2, name: "Granite dining table with dining chair", price: 25000, image: "/images/Granite dining table with dining chair 1.png" },
  { id: 3, name: "Outdoor bar table and stool", price: 25000, image: "/images/Outdoor bar table and stool 1.png" },
  { id: 4, name: "Plain console with teak mirror", price: 25000, image: "/images/Plain console with teak mirror 1.png" },
  { id: 5, name: "Grain coffee table", price: 15000, image: "/images/Grain coffee table 1.png" },
  { id: 6, name: "Kent coffee table", price: 225000, image: "/images/Kent coffee table 1.png" },
  { id: 7, name: "Round coffee table_color 2", price: 251000, image: "/images/Round coffee table_color 2 1.png" },
  { id: 8, name: "Reclaimed teak coffee table", price: 25200, image: "/images/Reclaimed teak coffee table 1.png" },
  { id: 9, name: "Plain console_", price: 258200, image: "/images/Plain console_ 1.png" },
  { id: 10, name: "Reclaimed teak Sideboard", price: 20000, image: "/images/Reclaimed teak Sideboard 1.png" },
  { id: 11, name: "SJP_0825 ", price: 200000, image: "/images/SJP_0825  1.png" },
  { id: 12, name: "Bella chair and table", price: 100000, image: "/images/Bella chair and table 1.png" },
  { id: 13, name: "Granite square side table", price: 258800, image: "/images/Granite square side table 2.png" },
  { id: 14, name: "Asgaard sofa", price: 250000, image: "/images/Asgaard sofa 2.png" },
  { id: 15, name: "Maya sofa three seater", price: 115000, image: "/images/Maya sofa three seater 1.png" },
  { id: 16, name: "Outdoor sofa set", price: 244000, image: "/images/Outdoor sofa set 1.png" },
]

export default function Shopcard() {
	const currentProducts = products
  return (
    <div className="w-full relative flex flex-col items-center justify-center px-25 py-4 pb-23 box-border text-left text-base text-black font-poppins">
      <div className="w-full max-w-[1243px] flex flex-col items-center justify-start gap-[117px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center content-start gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="w-[287px] flex flex-col items-center justify-start gap-3.5">
              <div className="w-full h-[287px] flex flex-col items-center justify-center">
				<Image
                className="w-full relative h-max object-cover"
                width={287}
                height={287}
                alt={product.name}
                src={product.image || "/placeholder.svg"}
				/>
			  </div>
              <div className="w-full max-w-[212px] flex flex-col items-start justify-start gap-2.5">
                <div className="self-stretch relative">{product.name}</div>
                <div className="self-stretch relative text-2xl font-medium">
                  Rs. {product.price.toLocaleString()}.00
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-start gap-9 text-xl">
			<button className="w-[60px] rounded-lg bg-[#fbebb5] h-15 flex flex-row items-center justify-center px-[27px] py-[15px] box-border">
            <div className="relative font-light">1</div>
			</button>
			<button className="w-[60px] rounded-lg bg-[#fff9e5] h-15 flex flex-row items-center justify-center px-[27px] py-[15px] box-border">
            <div className="relative font-light">2</div>
			</button>
			<button className="w-[60px] rounded-lg bg-[#fff9e5] h-15 flex flex-row items-center justify-center px-[27px] py-[15px] box-border">
            <div className="relative font-light">3</div>
			</button>
			<button className="w-[98px] rounded-lg bg-[#fff9e5] h-15 flex flex-row items-center justify-center px-[27px] py-[15px] box-border">
            <div className="relative font-light">Next</div>
			</button>
        </div>
      </div>
    </div>
  )
}