import React from "react";

export default function Weather() {
  return (
    <div className="absolute w-[285px] h-[153px] left-[1121px] top-[145px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] rounded-[4px]">
      <h1 className="absolute w-[50px] h-[30px] left-[15px] top-[81px] font-[Roboto] font-semibold text-[26px] leading-[30px] text-[#072D4B]">
        31°c
      </h1>
      <h1 className="absolute w-[41px] h-[18px] left-[15px] top-[56px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">
        Sunny
      </h1>
      <span className="absolute w-[255px] h-[0px] left-[15px] top-[41px] border-[0.2px] border-[#072D4B] opacity-60" />
      <img
        src="sun.png"
        className="absolute w-[52px] h-[52px] left-[218px] top-[56px]"
      />
      <h1 className="absolute w-[161px] h-[18px] left-[15px] top-[14px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">
        Bijnor, UttarPradesh
      </h1>
      <h1 className="absolute w-[40px] h-[14px] left-[15px] top-[126px] font-[Roboto] font-normal text-[12px] leading-[14px] text-[#072D4B]">
       Celsius
      </h1>
      <h1 className="absolute w-[40px] h-[14px] left-[78px] top-[126px] font-[Roboto] font-normal text-[12px] leading-[14px] text-[#072D4B] opacity-30">
    Fahrenheit
      </h1>
    </div>
  );
}
