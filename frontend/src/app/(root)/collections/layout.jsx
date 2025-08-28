'use client';
import SideBar from '@/components/sidebar/SideBar';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const CollectionLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full min-h-screen pt-15 px-10 ">
      {pathname === '/collections' && (
        <div className="w-full py-4 flex items-center justify-between ">
          <h1 className="text-xl font-medium">New (500)</h1>
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-1 cursor-pointer">
              <h3 className="text-md font-normal">Hide Filters</h3>
              <Image
                src={'/icons/filter.svg'}
                width={20}
                height={10}
                alt="filter"
              />
            </div>
            <div className="flex items-center justify-center gap-1 cursor-pointer">
              <h3 className="text-md font-normal">Sort</h3>
              <Image
                src={'/icons/down-filter.svg'}
                width={20}
                height={10}
                alt="filter"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <SideBar />

        <main
          className={`${pathname === '/collections' && 'ml-56'} flex-1 p-5`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default CollectionLayout;
