import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start px-6 py-8 sm:px-12 sm:py-16 md:px-24 md:py-24 box-border gap-10 text-center text-2xl text-black font-sans">
      <div className="w-full flex flex-col items-center justify-center gap-4 sm:w-3/4 md:w-1/2">
        <div className="text-2xl font-medium text-[36px]">Our Blogs</div>
        <div className="text-sm font-medium text-gray-500 text-[16px]">
          Find a bright idea to suit your taste with our great selection
        </div>
      </div>
      
      <div className="w-full flex flex-col items-center justify-start gap-12 sm:gap-16 md:w-full md:flex-row md:flex-wrap md:justify-between">
        {/* Blog Card 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-start gap-8">
          <Image
            className="rounded-lg max-w-full h-[300px] object-cover"
            width={393} height={393} alt="Blog Image"
            src="/images/Rectangle 13.png"
          />
          <div className="w-full flex flex-col items-center justify-start gap-3">
            <div className="font-medium">Going all-in with millennial design</div>
            <Link href="/Blog" className="border-b-2 pb-2 text-xl font-medium">Read More</Link>
            <div className="flex gap-6 text-left text-sm">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" width={18} height={18} alt="time icon" src="/images/Vector-time.svg" />
                <div className="font-light">5 min</div>
              </div>
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" width={18} height={18} alt="calendar icon" src="/images/Vector-cal.svg" />
                <div className="font-light">12<sup>th</sup> Oct 2022</div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-start gap-8">
          <Image
            className="rounded-lg max-w-full h-[300px] object-cover"
            width={393} height={393} alt="Blog Image"
            src="/images/Rectangle 14.png"
          />
          <div className="w-full flex flex-col items-center justify-start gap-3">
            <div className="font-medium">Going all-in with millennial design</div>
            <Link href="/Blog" className="border-b-2 pb-2 text-xl font-medium">Read More</Link>
            <div className="flex gap-6 text-left text-sm">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" width={18} height={18} alt="time icon" src="/images/Vector-time.svg" />
                <div className="font-light">5 min</div>
              </div>
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" width={18} height={18} alt="calendar icon" src="/images/Vector-cal.svg" />
                <div className="font-light">12<sup>th</sup> Oct 2022</div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-start gap-8">
          <Image
            className="rounded-lg max-w-full h-[300px] object-cover"
            width={393} height={393} alt="Blog Image"
            src="/images/Rectangle 15.png"
          />
          <div className="w-full flex flex-col items-center justify-start gap-3">
            <div className="font-medium">Going all-in with millennial design</div>
            <Link href="/Blog" className="border-b-2 pb-2 text-xl font-medium">Read More</Link>
            <div className="flex gap-6 text-left text-sm">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" width={18} height={18} alt="time icon" src="/images/Vector-time.svg" />
                <div className="font-light">5 min</div>
              </div>
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" width={18} height={18} alt="calendar icon" src="/images/Vector-cal.svg" />
                <div className="font-light">12<sup>th</sup> Oct 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Link href="/Blog" className="text-xl font-medium border-b-2 pb-2">
          View More
        </Link>
      </div>
    </div>
  );
}
