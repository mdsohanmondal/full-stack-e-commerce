import ProductCards from '@/components/product-cards/ProductCards';
import Image from 'next/image';
import React from 'react';

const RootHome = () => {
  const variants = [
    {
      title: 'Nike Air Max',
      colors: 6,
      readOnly: true,
      category: 'Men',
      brand: 'Nike',
      badge: 'Best Seller',
      badgeColor: 'error',
    },
    {
      title: 'Adidas Ultraboost',
      colors: 4,
      readOnly: false,
      category: 'Women',
      brand: 'Adidas',
      badge: 'New Arrival',
      badgeColor: 'success',
    },
    {
      title: 'Puma Running Shoes',
      colors: 5,
      readOnly: true,
      category: 'Men',
      brand: 'Puma',
      badge: 'Limited',
      badgeColor: 'warning',
    },
    {
      title: 'Reebok Classic',
      colors: 3,
      readOnly: false,
      category: 'Unisex',
      brand: 'Reebok',
      badge: 'Trending',
      badgeColor: 'info',
    },
    {
      title: 'Converse All Star',
      colors: 2,
      readOnly: true,
      category: 'Unisex',
      brand: 'Converse',
      badge: 'Hot Deal',
      badgeColor: 'secondary',
    },
    {
      title: 'Jordan Retro',
      colors: 7,
      readOnly: false,
      category: 'Men',
      brand: 'Jordan',
      badge: 'Featured',
      badgeColor: 'primary',
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Home Banner */}
      <div
        className="relative w-full h-[70vh]  bg-black bg-opacity-40"
        style={{
          backgroundImage: 'url(/images/home-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="bg-[#00000034] backdrop-blur-sm w-full h-full flex items-center justify-between px-10">
          {/* Left Side */}
          <div className="left-side text-white max-w-lg space-y-4">
            <h1 className="text-5xl font-bold">
              Big discount <span className="text-red-500">35%</span>
            </h1>
            <h2 className="text-3xl font-semibold">Style Cloths with</h2>
            <h2 className="text-3xl font-semibold">Your dream</h2>
            <p className="text-gray-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all">
              View Products
            </button>
          </div>

          {/* Right Side */}
          <div className="right-side relative max-w-md flex flex-col items-center px-5 mr-10">
            <div className="relative w-[35vw] h-[35vh] mb-4">
              <h2 className="text-4xl font-bold text-white mb-4 absolute -top-10 left-0 z-4">
                Easy
              </h2>
              <Image
                src="/images/banner.avif"
                fill
                className="object-cover rounded-2xl shadow-lg"
                alt="Banner"
              />
              <h2 className="text-4xl font-bold text-white absolute -bottom-10 right-0 z-4">
                Jorden
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* best products */}
      <div className="w-full py-10">
        <h1>Best of Easy products</h1>
        <div className="products w-full grid grid-cols-3 gap-5 px-20 py-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {variants.map((item) => (
            <ProductCards
              key={item.title}
              title={item.title}
              colors={item.colors}
              readOnly={item.readOnly}
              category={item.category}
              brand={item.brand}
              badgeColor={item.badgeColor}
              badge={item.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RootHome;
