'use client';
// components/sidebar/SideBar.jsx
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside
      hidden={pathname !== '/collections'}
      className="w-56 h-screen  fixed top-32 left-0"
    >
      <div className="px-8 font-semibold ">
        {/* demand */}
        <div className="demand border-b border-zinc-300 pb-8 mb-3">
          {['Low Top', 'Heigh Top', 'Skate boarding', 'Nike By You'].map(
            (text) => (
              <span
                key={text}
                className="text-md text-black font-normal cursor-pointer mb-1 block"
              >
                {text}
              </span>
            )
          )}
        </div>
        {/* gender filter */}
        <div className="gender border-b border-zinc-300 pb-8 mb-3">
          <div className="mb-4 flex items-center justify-between">
            <h3>Gender</h3>
            <Image
              src={'icons/down-filter.svg'}
              width={20}
              height={20}
              alt="down"
              className="cursor-pointer"
            />
          </div>
          {[
            { name: 'men', text: 'Men' },
            { name: 'women', text: 'Women' },
            { name: 'both', text: 'Both' },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-baseline gap-1"
            >
              <input type="checkbox" name={item.name} />
              <label className="font-normal text-black" htmlFor={item.name}>
                {item.text}
              </label>
            </div>
          ))}
        </div>

        {/* kids */}
        <div className="kids border-b border-zinc-300 pb-8 mb-3">
          <div className="mb-4 flex items-center justify-between">
            <h3>Kids</h3>
            <Image
              src={'icons/down-filter.svg'}
              width={20}
              height={20}
              alt="down"
              className="cursor-pointer"
            />
          </div>
          {[
            { name: 'boys', text: 'Boys' },
            { name: 'girls', text: 'Girls' },
            { name: 'both', text: 'Both' },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-baseline gap-1"
            >
              <input type="checkbox" name={item.name} />
              <label className="font-normal text-black" htmlFor={item.name}>
                {item.text}
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
