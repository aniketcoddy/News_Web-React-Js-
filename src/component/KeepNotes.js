import React, { useState } from "react";

export default function KeepNotes() {
  const [text, setText] = useState();
  const [show, setShow] = useState(text);

  const handleonchange = (event) => {
    return setText(event.target.value);
  };

  const updateValue = () => {
    return <span className="absolute w-[273px] h-fit left-[15px] top-[75px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] rounded-[6px] px-3 py-2">{text}</span>;
  };

  const handleonclick = () => {
    setShow(updateValue);
  };

  return (
    <div>
      <textarea
        className="absolute w-[273px] h-[46px] left-[15px] top-[15px] bg-[#FFFFFF] shadow-[0px 2px 20px] shadow-[rgba(0,0,0,0.04)] rounded-[6px] px-3 py-2"
        placeholder="Keep your notes here..."
        onChange={handleonchange}
      />
      <button>
        <img
          src="61932.png"
          className="absolute w-[20px] h-[19px] left-[252px] top-[30px] opacity-80"
          onClick={handleonclick}
        />
      </button>
      <div></div>
    </div>
  );
}
