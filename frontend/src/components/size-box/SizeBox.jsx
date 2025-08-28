import React from 'react';

const SizeBox = ({ size = '', available = true }) => {
  return (
    <div className="w-10 h-8 size border border-gray-400 rounded flex items-center justify-center cursor-pointer">
      <span
        className={`${
          available ? 'text-gray-600 ' : 'text-gray-400 '
        } select-none`}
      >
        {size}
      </span>
    </div>
  );
};

export default SizeBox;
