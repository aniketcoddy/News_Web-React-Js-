import React, { useState } from 'react'

export default function Search() {

  const [msg , setMsg] = useState("");

  const [click , setClick] = useState(msg)

const handleOnChange = (event)=>{
    return setMsg(event.target.value)
}

const enterthevalue =()=>{
    setClick(console.log(msg));
}

  return (

   
   <div className='fixed top-[0px]'>
   <input className='absolute w-[495px] h-[46px] left-[305px] top-[15px] bg-[rgba(47,159,248,0.04)] rounded-[4px] px-3' type="search"  placeholder="Search for News" onChange={handleOnChange}/>
      <button><img src="search.png" className='absolute w-[18px] h-[18px] left-[766px] top-[29px]' onClick={enterthevalue}/></button>

      <button>
    <div className='absolute w-[256px] h-[46px] left-[820px] top-[15px] bg-[#F4f9f8] rounded-[4px] border-[0.2px] border-[#072D4B]'>
     <h1 className="absolute w-[177px] h-[18px] left-[14.87px] top-[14px] font-[Roboto] font-normal text-[15px] leading-[18px] text-[#072D4B]">Latest News on Covid-19</h1>
    <img src="right.png" className='absolute w-[20px] h-[19px] left-[229px] top-[13px]'></img>
    </div>
    </button>
    </div>
    

  )
}
