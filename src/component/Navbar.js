import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <Link to="/general" className="absolute w-[52px] h-[30px] left-[305px] top-[145px] bg-[#2F9FF8] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] border-[0.2px] border-white rounded-[20px]">
        <h1 className="relative  w-[18px] h-[18px] left-[12px] top-[6px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#FFFFFF]">ALL</h1>
      </Link>
      <Link  to="/business" className="absolute w-[86px] h-[30px] left-[367px] top-[145px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] border-[0.2px] border-white rounded-[20px]">
        <h1 className="relative  w-[18px] h-[18px] left-[12px] top-[6px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">Business</h1>
      </Link>
      <Link to="/entertainment"  className="absolute w-[118px] h-[30px] left-[463px] top-[145px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] border-[0.2px] border-white rounded-[20px]">
        <h1 className="relative  w-[18px] h-[18px] left-[12px] top-[6px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">Entertainment</h1>
      </Link>
      <Link  to="/health" className="absolute w-[69px] h-[30px] left-[589px] top-[145px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] border-[0.2px] border-white rounded-[20px]">
        <h1 className="relative  w-[18px] h-[18px] left-[12px] top-[6px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">Health</h1>
      </Link>
      <Link  to="/science" className="absolute w-[80px] h-[30px] left-[664px] top-[145px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] border-[0.2px] border-white rounded-[20px]">
        <h1 className="relative  w-[18px] h-[18px] left-[12px] top-[6px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">Science</h1>
      </Link>
      <Link  to="/sports" className="absolute w-[71px] h-[30px] left-[748px] top-[145px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] border-[0.2px] border-white rounded-[20px]">
        <h1 className="relative  w-[18px] h-[18px] left-[12px] top-[6px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">Sports</h1>
      </Link>
      <Link  to="/technology" className="absolute w-[105px] h-[30px] left-[826px] top-[145px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] border-[0.2px] border-white rounded-[20px]">
        <h1 className="relative  w-[18px] h-[18px] left-[12px] top-[6px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">Technology</h1>
      </Link>

      
    </div>
  );
}
