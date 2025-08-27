'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import RatingBar from '../ui/Rating';
import { Typography } from '@mui/material';

const ProductCards = ({
  title,
  readOnly,
  starts,
  brand,
  category,
  colors,
  badge,
  badgeColor,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center justify-center gap-3">
      {/* Image Section */}
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="w-full h-52 sm:h-56 md:h-64 lg:h-[45vh] rounded-xl overflow-hidden cursor-pointer shadow-md relative"
      >
        <Image
          src="/shoes/shoe-1.jpg"
          alt="shoe"
          width={500}
          height={100}
          className={`w-full h-full object-cover object-center transition-transform duration-300 ${
            isHover ? 'scale-110' : 'scale-100'
          }`}
        />
        {badge && (
          <div className="absolute top-5 left-5 px-3 bg-white rounded-xl">
            <Typography color={badgeColor ?? 'info'} variant="subtitle2">
              {badge}
            </Typography>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="w-full px-2 flex flex-col justify-between">
        {/* Title & Price */}
        <div className="flex items-center justify-between text-base sm:text-lg md:text-xl font-semibold mb-2">
          <h1>
            {title.trim().length < 25
              ? title.trim()
              : title.trim().slice(0, 25) + '...'}
          </h1>
          <h1 className="text-red-500 font-bold">$38.30</h1>
        </div>

        {/* Category & Brand */}
        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base text-gray-400 mb-1">
          <span>{category}&apos;s Shoes</span>
          <span className="text-gray-600">{brand}</span>
        </div>

        {/* Colors & Rating */}
        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base text-gray-400">
          <span>{colors} colors</span>
          <RatingBar readOnly={readOnly} starts={starts} />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
