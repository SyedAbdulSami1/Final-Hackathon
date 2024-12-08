import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
      <header className='flex border-b bg-[#FBEBB5] font-sans min-h-[100px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center justify-end sm:px-10 px-4 py-3 gap-158 w-full max-w-screen-xl mx-auto'>
        

        <div id="collapseMenu"
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <ul
            className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            
            <li className='max-lg:border-b max-lg:py-3'><Link href='/'
              className='hover:text-green-600 text-[15px] font-bold text-green-600 block'>Home</Link></li>
            <li className='max-lg:border-b max-lg:py-3'><Link href='/shop'
              className='hover:text-[#00aa00] text-gray-600 text-[15px] font-bold block'>Shop</Link></li>
            <li className='max-lg:border-b max-lg:py-3'><Link href='/About'
              className='hover:text-[#00aa00] text-gray-600 text-[15px] font-bold block'>About</Link></li>
            <li className='max-lg:border-b max-lg:py-3'><Link href='/contact'
              className='hover:text-[#00aa00] text-gray-600 text-[15px] font-bold block'>Contact</Link></li>
          </ul>
        </div>
        <div className="w-[158px]"></div>

        <div className='flex items-center space-x-8 max-lg:ml-auto '>
        <span className="relative">
          <Image src={"/images/mdi_account-alert-outline.svg"} alt="account" width={28} height={28}></Image>
           </span>
          <span className="relative">
          <Image src={"/images/akar-icons_search.svg"} alt="heart" width={28} height={28}></Image>
          
          </span>
          
          <Image src={"/images/akar-icons_heart.svg"} alt="heart" width={28} height={28}></Image>
            
          <span className="relative">
          <Image src={"/images/ant-design_shopping-cart-outlined.svg"} alt="cart" width={28} height={28}></Image>
            
          </span>
          

          <button id="toggleOpen" className='lg:hidden'>
          <Image src={"/images/hamburger.svg"} alt="hamburger" width={28} height={28}></Image>
          
          </button>
        </div>
      </div>
    </header>
    )
}