'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const useGetPathName = () => {
  const [path, setPath] = useState('');
  const pathname = usePathname();
  useEffect(() => {
    setPath(pathname);
  }, []);
  return path;
};
export default useGetPathName;
