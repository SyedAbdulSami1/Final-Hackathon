import Image from "next/image";
import Link from "next/link";

export default function Arlist() {
  return (
    <div className="w-full relative bg-[#faf4f4] h-[100px] flex flex-row items-center justify-between px-[100px] py-[22px] text-left text-[20px] text-[#000] font-poppins">
      <div className="flex flex-row items-center justify-start gap-[31px]">
        <div className="flex flex-row items-center justify-start gap-[15px]">
          <Image className="w-[19px] relative h-[16.7px]" width={19} height={17} alt="" src="/images/settingVector.svg" />
          <div className="relative">Filter</div>
        </div>
        <Image className="w-[16.3px] relative h-[16.3px]" width={16} height={16} alt="" src="/images/VectorGrid.svg" />
        <Image className="w-[21px] relative h-[19.5px]" width={21} height={20} alt="" src="/Images/VectorView.svg" />
        <div className="border-l border-[#000] box-border h-[37px] flex flex-row items-center justify-start gap-[34px] text-[16px]">
          <div className="w-[2px] relative border-r border-[#9f9f9f] box-border h-[39px]" />
          <div className="relative">Showing 1–16 of 32 results</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[29px]">
        <div className="flex flex-row items-center justify-start gap-[17px]">
          <div className="relative">Show</div>
          <div className="w-[55px] bg-white h-[55px] flex flex-col items-center justify-center p-[12px_17px] box-border text-[#9f9f9f]">
            <div className="relative">16</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[17px]">
          <div className="relative">Short by</div>
          <div className="w-[188px] bg-white h-[55px] flex flex-row items-center justify-start p-[12px_30px] box-border text-[#9f9f9f]">
            <div className="relative">Default</div>
          </div>
        </div>
      </div>
    </div>
  );
};
