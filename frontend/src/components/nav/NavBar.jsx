'use client';
import Link from 'next/link';
import Image from 'next/image';
import style from './nav.module.css';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const linksArray = [
    { href: '/ ', text: 'Home' },
    { href: '/', text: 'Men' },
    { href: '/', text: 'Women' },
    { href: '/', text: 'Kids' },
    { href: '/collections', text: 'Collections' },
    { href: '/', text: 'Contact' },
  ];
  return (
    <nav className="w-full h-15 px-5 shadow-md fixed top-0 left-0 z-50 flex items-center justify-center gap-10 bg-[#ffffff6b] backdrop-blur-xl">
      {/* logo */}
      <div className="logo mr-auto w-10 h-9 flex items-center justify-center cursor-pointer">
        <Image
          src={'/logo.svg'}
          alt="logo"
          width={30}
          height={12}
          className="w-full h-full"
        />
      </div>
      {/* navigation links */}
      <div className="links flex items-center justify-center gap-5">
        {linksArray.map((item) => (
          <Link key={item.text} href={item.href}>
            <p className="text-[16px] cursor-pointer hover:text-blue-400 transition-all duration-200">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
      {/* search  */}
      {/* cart  */}
      <div className="actions ml-auto flex items-center justify-center gap-5">
        <div className={style.search}>
          <input type="text" placeholder="search..." className={style.input} />
        </div>
        <div className="cart relative w-12 h-12 flex items-center justify-center cursor-pointer">
          <Image src="/icons/cart2.svg" width={24} height={24} alt="cart" />

          {/* Cart count badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
            9
          </span>
        </div>

        {/* profile */}
        <div className="profile">
          <div className="avatar cursor-pointer w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
            <Image
              src={'/icons/placeholder-avatar.svg'}
              alt="avatar"
              width={20}
              height={12}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
