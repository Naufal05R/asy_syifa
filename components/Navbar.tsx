import { mediaList, navlist } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icon from './Icon';

type NavbarProps = {
  className?: string;
};

type NavItemProps = {
  title: string;
  url: string;
  className?: string;
};

const NavItem = ({ className, title, url }: NavItemProps) => (
  <li className={`${className}`}>
    <Link
      href={url}
      className='px-2 py-1 bg-none text-neutral-600 hover:text-neutral-950 rounded-full'
    >
      {title}
    </Link>
  </li>
);

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={`${className} border-b border-neutral-300 bg-white/90 backdrop-blur-xl`}>
      <div className='flex items-center justify-between flex-wrap gap-y-2'>
        <Link href='/'>
          <Image
            src='/logo.png'
            width={180}
            height={36}
            alt='logo'
            className='object-contain lg:w-44 w-36'
          />
        </Link>
        <ul className='hidden gap-1 md:flex'>
          {navlist.map((item, index) => (
            <NavItem
              key={index}
              {...item}
              className='select-none text-sm capitalize hover:underline'
            />
          ))}
        </ul>
        <div className='flex gap-x-1.5'>
          {mediaList.map((icon) => (
            <Icon icon={icon.identifier} key={icon.name} size={24} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
