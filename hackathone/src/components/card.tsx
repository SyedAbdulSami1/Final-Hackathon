import Link from "next/link";
import Image from "next/image";

export default function Card() {
  return (
    <div className="relative bg-[#FAF4F4] w-full flex flex-wrap gap-[30px] px-[20px] lg:px-[100px] py-[20px] lg:py-[51px] text-left text-[24px] lg:text-[36px] text-black font-poppins justify-center">
      <div className="w-full lg:w-[605px] flex flex-col">
        <Image
          className="w-full h-[383px] object-cover"
          width={605}
          height={383}
          alt=""
          src="/images/Tale.png"
        />
        <div className="px-[20px] lg:px-[105px] gap-[23px]">
          <div className="font-medium">Side table</div>
          <div className="w-max border-b-2 border-black h-[49px] flex items-center text-[18px] lg:text-[24px]">
            <div className="font-medium">View More</div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[605px] flex flex-col">
        <Image
          className="w-full h-[383px] object-cover"
          width={605}
          height={383}
          alt=""
          src="/images/sofa card.png"
        />
        <div className="px-[20px] lg:px-[105px] gap-[23px]">
          <div className="font-medium">Side table</div>
          <div className="w-max border-b-2 border-black h-[49px] flex items-center text-[18px] lg:text-[24px]">
            <div className="font-medium"><Link href={"/"}>View More</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
