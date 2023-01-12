import React from "react";

export default function NewsItem(props) {
  return (
    <div>
    <a href={props.url}><div className="absolute w-[771px] h-[164px] left-[305px] top-[199px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] rounded-[4px]">
        <img
          src={props.urlToImage}
          className="absolute w-[172.35px] h-[130px] left-[583.35px] top-[17px] rounded-[4px]"
        />
        <h2 className="absolute w-[530.32px] h-[20px] left-[23.46px] top-[17px] font-[Roboto] font-normal text-[17px] leading-[20px] text-[#072D4B]">
          {props.title}..
        </h2>

        <h3 className="absolute w-[510.94px] h-[61px] left-[23.46px] top-[67px] font-[Roboto] font-normal text-[14px] text-[#072D4B] opacity-60 leading-[22px]">
          {props.description}..
        </h3>
        <button className="absolute w-[16.32px] h-[16px] left-[310.68px] top-[128px]">
          <img src="share.png" />
        </button>
        <h2 className="absolute w-[31.62px] h-[22px] left-[331.68px] top-[125px] font-[Roboto] font-medium text-[12px] leading-[22px] text-[#0768B5]">
          Share
        </h2>
        <button className="absolute w-[16.32px] h-[16px] left-[412.27px] top-[128px]">
          <img src="pocket.png" />
        </button>
        <h2 className="absolute w-[59.15px] h-[22px] left-[433.75px] top-[125px] font-[Roboto] font-medium text-[12px] leading-[22px] text-[#0768B5]">
          Read Later
        </h2>
        <h2 className="absolute w-[142.31px] h-[22px] left-[138.79px] top-[120px] font-[Roboto] font-normal text-[12px] leading-[22px] text-[#072D4B] opacity-40">
          {new Date(props.publishedAt).toGMTString()}
        </h2>
        <h2 className="absolute w-[48.95px] h-[22px] left-[23.46px] top-[125px] font-[Roboto] font-normal text-[12px] leading-[22px] text-[#072D4B] opacity-40">
          {props.source}
        </h2>
      </div>
      </a>
    </div>
  );
}
