import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
    <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
        <div className="bg-white rounded overflow-hidden">
          <Image src="/images/cardImg1.webp" height={393} width={393} alt="Blog Post 1" className="w-full h-52 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Dolor</h3>
            <p className="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
            <p className="text-orange-500 text-[13px] font-semibold mt-4">08 April 2024</p>
            <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden">
          <Image src="/images/cardImg2.webp" height={393} width={393} alt="Blog Post 2" className="w-full h-52 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Consectetur Adipiscing</h3>
            <p className="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
            <p className="text-orange-500 text-[13px] font-semibold mt-4">08 April 2024</p>
            <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden">
          <Image src="/images/cardImg3.webp" height={393} width={393} alt="Blog Post 3" className="w-full h-52 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
            <p className="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
            <p className="text-orange-500 text-[13px] font-semibold mt-4">08 April 2024</p>
            <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden">
          <Image src="/images/cardImg4.webp" height={393} width={393} alt="Blog Post 3" className="w-full h-52 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
            <p className="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
            <p className="text-orange-500 text-[13px] font-semibold mt-4">08 April 2024</p>
            <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden">
          <Image src="/images/cardImg5.webp" height={393} width={393} alt="Blog Post 3" className="w-full h-52 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
            <p className="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
            <p className="text-orange-500 text-[13px] font-semibold mt-4">08 April 2024</p>
            <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">Read More</a>
          </div>
        </div>
        <div className="bg-white rounded overflow-hidden">
          <Image src="/images/cardImg6.webp" height={393} width={393} alt="Blog Post 3" className="w-full h-52 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Lorem Ipsum Sit Amet</h3>
            <p className="text-gray-500 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
            <p className="text-orange-500 text-[13px] font-semibold mt-4">08 April 2024</p>
            <a href="javascript:void(0);" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
