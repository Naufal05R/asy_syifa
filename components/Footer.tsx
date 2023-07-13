import Image from 'next/image';
import Link from 'next/link';

import { ItemProps } from '@/types';
import { styles } from '@/app/styles';

const FooterCategoryLink = ({ index }: ItemProps) => (
  <li className='flex'>
    <Link
      href='/'
      className='inline-flex w-full py-1 text-neutral-600 transition duration-300 hover:text-neutral-950 hover:underline'
    >
      Link Test {index}
    </Link>
  </li>
);

const FooterCategory = ({  }: ItemProps) => (
  <article className='w-full xs:w-1/2 lg:w-1/4 lg:px-4'>
    <h2 className='title-font mb-3 text-lg font-medium capitalize tracking-widest text-neutral-900'>
      Category
    </h2>
    <ul className='mb-10 flex list-none flex-col gap-y-px'>
      {Array.from({ length: 4 }).map((_, index) => (
        <FooterCategoryLink
          key={index}
          index={index}
        />
      ))}
    </ul>
  </article>
);

const FooterBody = () => (
  <section
    className={`lg:py-18 flex w-full flex-col flex-wrap py-12 ${styles.paddingX} md:flex-nowrap lg:flex-row lg:items-start`}
  >
    <div className='w-64 flex-shrink-0 text-center md:mx-0 md:text-left'>
      <Link
        href='/'
        className='flex items-center'
      >
        <Image
          src='/logo.png'
          alt='logo'
          width={196}
          height={40}
          className='w-full object-contain'
        />
      </Link>
    </div>
    <div className='-mb-10 mt-10 flex flex-grow flex-wrap lg:mt-0 lg:pl-20 lg:text-left'>
      {Array.from({ length: 4 }).map((_, index) => (
        <FooterCategory
          key={index}
          index={index}
        />
      ))}
    </div>
  </section>
);

const FooterCopyright = () => (
  <blockquote
    className={`mx-auto flex w-full ${styles.paddingX} flex-col flex-wrap px-5 py-4 sm:flex-row`}
  >
    <p className='text-sm text-neutral-500 sm:text-left'>
      © 2020 Ma&rsquo;had Tahfizh Asy-Syifa.
    </p>
  </blockquote>
);

const Footer = () => {
  return (
    <footer className='text-neutral-600'>
      <FooterBody />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
