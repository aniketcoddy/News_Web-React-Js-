import React from "react";

export default function NewsItems1(props) {
  return (
    <div>
      <a href={props.url}><div className="relative w-[374px] h-[191px] left-[305px] top-[384px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] rounded-[4px] mr-[22.5px] mb-2">
        <img
          src={props.urlToImage}
          className="absolute w-[134.14px] h-[132px] left-[224.58px] top-[16px] rounded-[4px]"
        />
        <h2 className="absolute w-[182.92px] h-[45px] left-[23.37px] top-[17px] font-[Roboto] font-normal text-[17px] leading-[24px] text-[#072D4B]">
       {props.title}..
        </h2>

        <h3 className="absolute w-[179.87px] h-[65px] left-[23.37px] top-[71px] font-[Roboto] font-normal text-[14px] text-[#072D4B] opacity-60 leading-[22px]">
        {props.description}..
        </h3>
        <button className="absolute w-[16.26px] h-[16px] left-[222.1px] top-[159px]">
          <img src="share.png" />
        </button>
        <h2 className="absolute w-[31.62px] h-[22px] left-[243.49px] top-[156px] font-[Roboto] font-medium text-[10px] leading-[22px] text-[#0768B5]">
          Share
        </h2>
        <button className="absolute w-[16.32px] h-[16px] left-[289.39px] top-[159px]">
          <img src="pocket.png" />
        </button>
        <h2 className="absolute w-[59.15px] h-[22px] left-[308.78px] top-[156px] font-[Roboto] font-medium text-[10px] leading-[22px] text-[#0768B5]">
          Read Later
        </h2>
        <h2 className="absolute w-[122.31px] h-[22px] left-[109.48px] top-[150px] font-[Roboto] font-normal text-[11px] leading-[22px] text-[#072D4B] opacity-40 pl-2">
          {new Date(props.publishedAt).toGMTString().slice(0,25)}
        </h2>
        <h2 className="absolute w-[89.95px] h-[22px] left-[23.37px] top-[150px] font-[Roboto] font-normal text-[12px] leading-[22px] text-[#072D4B] opacity-40 pr-2">
       {props.source}
        </h2>
      </div>
      </a>
    </div>
  );
}
