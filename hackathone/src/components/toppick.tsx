import Link from "next/link";
import Image from "next/image";

export default function Toppick() {
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-center py-14 px-24 box-border gap-16 text-left text-2xl text-black font-poppins">
      <div className="w-full max-w-screen-lg flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-full font-medium text-[36px]">Top Picks For You</div>
        <div className="w-full text-sm font-medium text-gray-500 text-center">
          <p className="w-full break-words">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-8 font-base">
        {/* First Item */}
        <div className="w-[287px] flex flex-col items-start justify-start gap-4">
          <Image
            className="w-full h-[287px] object-cover sm:w-full md:w-[250px] lg:w-[287px]"
            width={287} height={287} alt=""
            src="/images/Trenton modular sofa_3 1.png"></Image>
          <div className="w-[194px] flex flex-col items-start justify-start gap-3">
            <div className="w-full">Trenton modular sofa_3</div>
            <div className="w-full text-xl font-medium">Rs. 25,000.00</div>
          </div>
        </div>
        {/* Second Item */}
        <div className="w-[287px] flex flex-col items-start justify-start gap-4">
          <Image
            className="w-full h-[287px] object-cover sm:w-full md:w-[250px] lg:w-[287px]"
            width={287} height={287} alt=""
            src="/images/Granite dining table with dining chair 1.png" ></Image>
          <div className="w-[212px] flex flex-col items-start justify-start gap-3">
            <div className="w-full">Granite dining table with dining chair</div>
            <div className="w-full text-xl font-medium">Rs. 25,000.00</div>
          </div>
        </div>
        {/* Third Item */}
        <div className="w-[287px] flex flex-col items-start justify-start gap-4">
          <Image
            className="w-full h-[287px] object-cover sm:w-full md:w-[250px] lg:w-[287px]"
            width={287} height={287} alt=""
            src="/images/Outdoor bar table and stool 1.png" ></Image>
          <div className="w-[212px] flex flex-col items-start justify-start gap-3">
            <div className="w-full">Outdoor bar table and stool</div>
            <div className="w-full text-xl font-medium">Rs. 25,000.00</div>
          </div>
        </div>
        {/* Fourth Item */}
        <div className="w-[287px] flex flex-col items-start justify-start gap-4">
          <Image
            className="w-full h-[287px] object-cover sm:w-full md:w-[250px] lg:w-[287px]"
            width={287} height={287} alt=""
            src="/images/Plain console with teak mirror 1.png"></Image>
          <div className="w-[199px] flex flex-col items-start justify-start gap-3">
            <div className="w-full">Plain console with teak mirror</div>
            <div className="w-full text-xl font-medium">Rs. 25,000.00</div>
          </div>
        </div>
      </div>
      <div className="w-max border-b-2 border-black h-[49px] flex items-start justify-center text-xl">
        <div className="font-medium">
          <Link href={"/"}>View More</Link>
        </div>
      </div>
    </div>
  );
}
