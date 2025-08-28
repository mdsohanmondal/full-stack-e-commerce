import Image from 'next/image';
import React from 'react';

const WidthBtn = ({ dark = true, icon = null, text }) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 w-48 h-10 ${
        dark ? 'bg-black text-white ' : 'text-black bg-white '
      } rounded-xl cursor-pointer border border-gray-400`}
    >
      {icon && <Image src={icon} width={20} height={5} alt="icon" />}
      <span>{text}</span>
    </button>
  );
};

export default WidthBtn;
