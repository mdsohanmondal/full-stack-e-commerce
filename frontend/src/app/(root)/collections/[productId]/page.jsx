'use client';
import SizeBox from '@/components/size-box/SizeBox';
import WidthBtn from '@/components/ui/WidthBtn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductView = () => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const leftVariants = [
    '/shoes/shoe-15.avif',
    '/shoes/shoe-2.webp',
    '/shoes/shoe-3.webp',
  ];
  const mainImage = '/shoes/shoe-8.avif';

  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-10 py-5">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-5">
        <Link href={'/'}>Home </Link> <Link href={'/'}>/ Products</Link>{' '}
        <Link href={'/'} className="text-gray-700 font-normal">
          {' '}
          / Nike Air Max 90 SE
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Left Images */}

        <div className="flex md:flex-col gap-4 md:w-20 w-20 ">
          {leftVariants.map((src, idx) => (
            <div key={idx} className="w-20 h-20 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`variant-${idx}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full md:w-1/2 h-[70vh] md:h-[70vh] rounded-xl overflow-hidden">
          <Image
            src={mainImage}
            alt="main shoe"
            width={500}
            height={500}
            className="w-full h-full object-cover object-center bg-gray-200"
          />
        </div>
        {/* Product Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-4 ml-10">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Nike Air Max 90 SE
          </h1>
          <span className="text-sm text-gray-500">Women's Shoes</span>
          <h4 className="text-xl font-medium">$140.00</h4>

          {/* Variant Images */}
          <div className="flex gap-3 flex-wrap mt-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="w-20 h-20 rounded-xl overflow-hidden">
                <Image
                  src="/shoes/shoe-2.webp"
                  alt={`variant-${idx}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Size Selection */}
          <div className="mt-5">
            <div className="flex justify-between items-center mb-2">
              <h4>Select Size</h4>
              <span className="text-blue-500 cursor-pointer">Size Guide</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size, idx) => (
                <SizeBox key={idx} size={size} />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center space-x-4 border rounded-md w-max px-3 py-1 bg-white shadow-sm mt-5">
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md text-lg font-bold transition">
              -
            </button>
            <span className="w-6 text-center font-medium text-gray-700">1</span>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-md text-lg font-bold transition">
              +
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 mt-5">
            <WidthBtn text="Add To Cart" icon="/icons/white-bag.svg" />
            <WidthBtn
              text="Favorite"
              dark={false}
              icon="/icons/white-bag.svg"
            />
          </div>

          {/* Product Details Text */}
          <div className="mt-6">
            <h1 className="text-2xl font-medium mb-2">Product Details</h1>
            <p className="text-gray-700 mb-2">
              The Nike Air Max 90 SE brings a fresh take on the iconic
              silhouette with premium materials and modern comfort technology.
              Featuring a lightweight mesh upper with synthetic leather
              overlays, this shoe delivers both style and breathability. The
              visible Air Max unit in the heel provides exceptional cushioning
              for all-day comfort.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Premium mesh and synthetic leather construction</li>
              <li>Rubber outsole with waffle pattern for traction</li>
              <li>Padded collar and tongue for comfort</li>
              <li>Visible Air Max cushioning in heel</li>
              <li>Classic lace-up closure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

// Product Details
// The Nike Air Max 90 SE brings a fresh take on the iconic silhouette with premium materials and modern comfort technology. Featuring a lightweight mesh upper with synthetic leather overlays, this shoe delivers both style and breathability. The visible Air Max unit in the heel provides exceptional cushioning for all-day comfort.

// • Premium mesh and synthetic leather construction
// • Visible Air Max cushioning in heel
// • Rubber outsole with waffle pattern for traction
// • Padded collar and tongue for comfort
// • Classic lace-up closure

//  const product = {
//     name: 'Nike Air Max 90 SE',
//     category: "Women's Shoes",
//     price: 140.0,
//     originalPrice: 180.0,
//     rating: 4.5,
//     reviewCount: 234,
//     inStock: true,
//     variants: [
//       {
//         id: 0,
//         image: '/api/placeholder/600/600',
//         color: 'White/Black',
//         name: 'Classic White',
//       },
//       {
//         id: 1,
//         image: '/api/placeholder/600/600',
//         color: 'Black/Red',
//         name: 'Sport Black',
//       },
//       {
//         id: 2,
//         image: '/api/placeholder/600/600',
//         color: 'Blue/White',
//         name: 'Ocean Blue',
//       },
//       {
//         id: 3,
//         image: '/api/placeholder/600/600',
//         color: 'Pink/Grey',
//         name: 'Rose Gold',
//       },
//     ],
//     thumbnails: [
//       '/api/placeholder/100/100',
//       '/api/placeholder/100/100',
//       '/api/placeholder/100/100',
//       '/api/placeholder/100/100',
//     ],
//     sizes: [
//       { size: '5', available: true },
//       { size: '5.5', available: true },
//       { size: '6', available: true },
//       { size: '6.5', available: false },
//       { size: '7', available: true },
//       { size: '7.5', available: true },
//       { size: '8', available: true },
//       { size: '8.5', available: true },
//       { size: '9', available: true },
//       { size: '9.5', available: false },
//       { size: '10', available: true },
//       { size: '10.5', available: true },
//     ],
//   };
