import Image from "next/image";
import Link from "next/link";

export default function Instagram() {
  return (
    <div className="w-full relative h-[450px] flex flex-col items-center justify-center px-16 sm:px-32 md:px-64 lg:px-96 xl:px-[493px] text-center text-black font-sans gap-2.5">
      <div className="w-full absolute top-0 left-0 flex flex-col items-center justify-start z-0">
        <Image
          className="w-full h-[450px] object-cover"
          width={1440}
          height={450}
          alt=""
          src="/images/LBRectangle 17.png"
        />
      </div>
      <div className="w-[454px] flex flex-col items-center justify-start gap-4 z-10">
        <div className="flex flex-col items-center justify-start">
          <b className="w-full text-[60px]">Our Instagram</b>
          <div className="w-full text-[20px]">Follow our store on Instagram</div>
        </div>
        <div className="w-[255px] shadow-[0px_20px_20px_rgba(0,0,0,0.1)] rounded-full bg-[#faf4f4] h-[64px] flex items-center justify-center px-[81px] py-[17px] text-lg">
          <div>
            <Link href="/">Follow Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
