import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full relative bg-[#fbebb5]  lg:h-[996px] flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-[206px] text-left text-black text-[32px] lg:text-[64px] font-sans lg:mr-0 justify-between">
      <div className="w-full lg:w-[440px] flex flex-col items-start justify-start py-[50px] gap-[35px]">
        <div className=" lg:w-[30vw] sm:w-auto font-medium text-[32px] lg:text-[64px]">Rocket single seater</div>
        <div className="w-max border-b-2 border-black h-[49px] flex flex-col items-start justify-start text-[18px] lg:text-[24px]">
          <div className="font-medium">
            <Link href='/shop'>Shop Now </Link>
          </div>
        </div>
      </div>
      <div className="flex items-streach">
      <Image
        className="w-full lg:w-[666px] h-auto lg:h-[659px] object-contain "
        width={666}
        height={659}
        alt="Rocket single seater"
        src={"/images/Rocket single seater 1.png"}
      />
      </div>
    </div>
  );
}
