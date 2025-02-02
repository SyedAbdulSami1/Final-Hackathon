import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-white flex flex-col items-start justify-start px-4 sm:px-10 lg:px-20 py-10 text-[#9f9f9f] text-sm lg:text-base font-poppins">
      <div className="w-full max-w-[1240px] flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex-shrink-0 mb-6 sm:mb-0">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div>
              <h4 className="font-medium text-black mb-4">Links</h4>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Help</h4>
              <ul className="space-y-2">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-4">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  className="border-b border-black py-2 w-full"
                  placeholder="Enter Your Email Address"
                />
                <button className="bg-black text-white py-2 px-4 font-medium">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4 text-black">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
