import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full relative bg-white h-[555px] flex flex-col items-start justify-start px-[100px] py-[98px] box-border text-left text-[#9f9f9f] text-[16px] font-poppins">
      <div className="w-full max-w-[1240px] flex flex-col items-start justify-start gap-[47px]">
        <div className="w-full flex flex-row items-center justify-start flex-wrap">
          <div className="flex items-center justify-center pr-[136px]">
            <div className="w-[285px] relative inline-block flex-shrink-0">
              <p className="m-0">400 University Drive Suite 200 Coral Gables,</p>
              <p className="m-0">FL 33134 USA</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[72px] flex-wrap">
            <div className="w-[352px] flex flex-row items-start justify-between flex-wrap">
              <div className="w-[68px] flex flex-col items-start justify-start gap-[55px]">
                <div className="self-stretch relative font-medium">Links</div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[46px] text-black">
                  <div className="self-stretch relative font-medium">
                    <Link href={"/"}>Home</Link>
                  </div>
                  <div className="self-stretch relative font-medium">
                    <Link href={"/shop"}>Shop</Link>
                  </div>
                  <div className="self-stretch relative font-medium">
                    <Link href={"/About"}>About</Link>
                  </div>
                  <div className="self-stretch relative font-medium">
                    <Link href={"/contact"}>Contact</Link>
                  </div>
                </div>
              </div>
              <div className="w-[140px] flex flex-col items-start justify-start gap-[55px]">
                <div className="self-stretch relative font-medium">Help</div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[46px] text-black">
                  <div className="self-stretch relative font-medium">Payment Options</div>
                  <div className="self-stretch relative font-medium">Returns</div>
                  <div className="self-stretch relative font-medium">Privacy Policies</div>
                </div>
              </div>
            </div>
            <div className="w-[286px] flex flex-col items-start justify-start gap-[43px]">
              <div className="self-stretch relative font-medium">Newsletter</div>
              <div className="w-full flex flex-row items-center justify-between text-[14px]">
                <input
                  type="email"
                  className="border-b border-black py-[6px] text-black w-full"
                  placeholder="Enter Your Email Address"
                />
                <div className="border-b border-black flex flex-row items-center justify-center py-[6px] text-black">
                  <div className="relative font-medium"><Link href={"/"}>SUBSCRIBE</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch border-t border-[#d9d9d9] flex flex-col items-start justify-start text-black">
          <div className="self-stretch relative">2022 Meubel House. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}
