import Image from "next/image";
import Link from "next/link";

export default function Conheader() {
  return (
    <div className="w-full relative h-[316px] flex flex-col items-center justify-center px-16 sm:px-8 text-left text-3xl sm:text-2xl font-poppins">
      <div className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-0">
        <Image
          className="w-full h-[316px] object-cover"
          width={1440}
          height={316}
          alt=""
          src="/images/hBGrRectangle 1.png"
        />
      </div>
      <div className="w-[196px] flex flex-col items-center justify-start z-10">
        <Image
          className="w-[77px] h-[77px] object-cover"
          width={77}
          height={77}
          alt=""
          src="/images/Meubel House_Logos-05.png"
        />
        <div className="text-center font-medium mt-2">Contact</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-2 z-20 text-sm sm:text-xs mt-2">
        <div className="font-medium"><Link href={"/"}>Home</Link></div>
        <Image
          className="w-5 h-5 object-contain"
          width={20}
          height={20}
          alt=""
          src="/images/dashicons_arrow-down-alt2.svg"
        />
        <div className="font-light">Contact</div>
      </div>
    </div>
  );
}
