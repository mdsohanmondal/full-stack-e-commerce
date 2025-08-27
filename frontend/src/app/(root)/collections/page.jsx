import ProductCards from '@/components/product-cards/ProductCards';
import Image from 'next/image';
import React from 'react';

const Collections = () => {
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
    <div className="w-full min-h-screen bg-white">
      {/* filter sections */}

      {/* product sections */}
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {variants.map((item) => (
          <ProductCards
            key={`${item.title}-${item.colors}`}
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
  );
};

export default Collections;
