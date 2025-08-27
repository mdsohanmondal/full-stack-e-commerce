// components/Layout.jsx
import SideBar from '@/components/sidebar/SideBar';
import Image from 'next/image';

const CollectionLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen pt-15">
      <div className="w-full px-10 py-4 flex items-center justify-between ">
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

      <div className="flex">
        {/* Sidebar */}
        <SideBar />

        <main className="ml-56 flex-1 p-5">{children}</main>
      </div>
    </div>
  );
};

export default CollectionLayout;
