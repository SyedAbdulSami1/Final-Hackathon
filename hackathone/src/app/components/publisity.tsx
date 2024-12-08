import Image from "next/image";
import Link from "next/link";


export default function Publisity() {
  return (
    <div className="w-full h-[639px] bg-[#fff9e5] flex flex-col md:flex-row items-center justify-between px-4 md:px-24 text-center text-lg text-black font-poppins">
      <div className="relative w-full md:w-[917px] h-[639px]">
      <Image src={"/images/asgaard-sofa-1.png"} alt="Image" width={917} height={639}></Image>
      </div>
      <div className="w-full md:w-[331px] flex flex-col items-center justify-start gap-8">
        <div className="w-full flex flex-col items-center justify-start">
          <div className="text-base md:text-lg font-medium">
            New Arrivals
          </div>
          <b className="text-2xl md:text-4xl text-center w-full">
            Asgaard sofa
          </b>
        </div>
        <div className="w-[255px] bg-[#fff9e5] border border-black box-border h-[64px] flex items-center justify-center px-8 text-left text-xl">
          <Link href="/" className="relative">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
