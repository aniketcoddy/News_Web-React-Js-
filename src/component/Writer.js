import React from "react";

export default function Writer() {
  return (
    <div className="absolute w-[285px] h-[100px] left-[1121px] top-[313px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] rounded-[4px]">
      <img src="feather.png" className="absolute w-[24px] h-[24px] left-[15px] top-[13px]"/>
      <h1 className="absolute w-[149px] h-[18px] left-[51px] top-[16px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">
        Become a Story Writer
      </h1>
      <h1 className="absolute w-[120px] h-[38px] left-[15px] top-[46px] font-[Roboto] font-normal text-[12px] leading-[18px] text-[#072D4B] opacity-60">
        Contribute Stories and start earning
      </h1>
      <button className="absolute w-[110px] h-[38px] left-[160px] top-[46px] bg-[#FFFFFF] rounded-[4px] border-[0.2px]">
        <h1 className="absolute w-[76px] h-[18px] left-[17px] top-[10px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#2F9FF8]">
          Know More
        </h1>
      </button>
    </div>
  );
}
