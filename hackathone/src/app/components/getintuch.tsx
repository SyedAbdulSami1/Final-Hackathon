import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="w-full relative bg-white h-auto flex flex-col items-center justify-start px-[191px] sm:px-[30px] box-border text-center text-[36px] text-black font-poppins">
      <div className="w-full max-w-[644px] flex flex-col items-center justify-start py-[98px] pb-[14px] gap-[7px]">
        <div className="w-full font-semibold text-[36px] sm:text-[28px]">
          Get In Touch With Us
        </div>
        <div className="w-full text-[16px] text-[#9f9f9f] sm:text-[14px]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start gap-[30px] text-left text-[24px] sm:text-[18px]">
        {/* Contact Information Section */}
        <div className="w-full sm:w-[393px] bg-white h-auto sm:h-[923px] flex flex-col items-start justify-start p-[143px] sm:p-[50px] sm:pl-[50px] sm:pr-[58px] box-border gap-[42px]">
          <div className="flex flex-row items-start justify-start gap-[30px]">
            <Image className="w-[22px] h-[28.2px]" width={22} height={28} alt="" src="/images/locationVector.svg" />
            <div className="w-[212px] flex flex-col items-start justify-start">
              <div className="w-full font-medium text-[16px] sm:text-[14px]">Address</div>
              <div className="w-full text-[16px] sm:text-[14px]">236 5th SE Avenue, New York NY10000, United States</div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-[34px]">
            <Image className="w-[22.3px] h-[22.3px]" width={22} height={22} alt="" src="/images/phoneVector.svg" />
            <div className="w-[212px] flex flex-col items-start justify-start">
              <div className="w-full font-medium text-[16px] sm:text-[14px]">Phone</div>
              <div className="w-full text-[16px] sm:text-[14px]">
                <p className="m-0">Mobile: +(84) 546-6789</p>
                <p className="m-0">Hotline: +(84) 456-6789</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-[30px]">
            <Image className="w-[23px] h-[23px]" width={23} height={23} alt="" src="/images/workVector.svg" />
            <div className="w-[212px] flex flex-col items-start justify-start">
              <div className="w-full font-medium text-[16px] sm:text-[14px]">Working Time</div>
              <div className="w-full text-[16px] sm:text-[14px]">
                <p className="m-0">Monday-Friday: 9:00 - 22:00</p>
                <p className="m-0">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-row items-center justify-start text-[16px] sm:text-[14px]">
          <div className="w-full sm:w-[635px] bg-white h-auto sm:h-[923px] flex flex-col sm:flex-row items-start justify-start p-[70px] sm:p-[30px] sm:pl-[30px] sm:pr-[30px] box-border">
            <div className="w-full sm:w-[530px] flex flex-col items-start justify-start gap-[64px]">
              {/* Name Input */}
              <div className="w-full flex flex-col items-start gap-[22px]">
                <div className="w-full font-medium text-[16px] sm:text-[14px]">Your name</div>
                <input
                  className="w-full h-[75px] p-[25px] pl-[30px] pr-[30px] text-[16px] sm:text-[14px] bg-white border border-[#9f9f9f] rounded-[10px] box-border"
                  placeholder="Abc"
                />
              </div>

              {/* Email Input */}
              <div className="w-full flex flex-col items-start gap-[22px]">
                <div className="w-full font-medium text-[16px] sm:text-[14px]">Email address</div>
                <input
                  className="w-full h-[75px] p-[25px] pl-[30px] pr-[30px] text-[16px] sm:text-[14px] bg-white border border-[#9f9f9f] rounded-[10px] box-border"
                  placeholder="Abc@def.com"
                />
              </div>

              {/* Subject Input */}
              <div className="w-full flex flex-col items-start gap-[22px]">
                <div className="w-full font-medium text-[16px] sm:text-[14px]">Subject</div>
                <input
                  className="w-full h-[75px] p-[25px] pl-[30px] pr-[30px] text-[16px] sm:text-[14px] bg-white border border-[#9f9f9f] rounded-[10px] box-border"
                  placeholder="This is optional"
                />
              </div>

              {/* Message Textarea */}
              <div className="w-full flex flex-col items-start gap-[22px]">
                <div className="w-full font-medium text-[16px] sm:text-[14px]">Message</div>
                <textarea
                  className="w-full h-[120px] p-[25px] pl-[30px] pr-[30px] text-[16px] sm:text-[14px] bg-white border border-[#9f9f9f] rounded-[10px] box-border"
                  placeholder="Hi! I’d like to ask about"
                />
              </div>

              {/* Submit Button */}
              <button className="w-[237px] h-[48px] flex items-center justify-center bg-white text-black border border-black rounded-[15px] px-[89px] mt-[20px] cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
