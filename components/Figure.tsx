import { ItemProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const FigureItem = ({ index }: ItemProps) => (
  <article className={`${index % 3 === 0 ? 'w-full' : 'w-1/2'} p-1 md:p-2`}>
    <Image
      alt='gallery'
      className='block contrast-150 h-full w-full rounded-2xl object-cover object-center'
      width={index % 3 === 0 ? 600 : 500}
      height={index % 3 === 0 ? 360 : 300}
      src={`https://dummyimage.com/${index % 3 === 0 ? '600x360' : '500x300'}`}
    />
  </article>
);

const Figure = ({ index }: ItemProps) => {
  return (
    <section
      className={`flex ${
        index % 2 ? 'flex-wrap' : 'xs:flex-wrap-reverse flex-wrap'
      } w-full xs:w-1/2`}
    >
      {Array.from(Array(3).keys()).map((index) => (
        <FigureItem
          key={index}
          index={index}
        />
      ))}
    </section>
  );
};

export default Figure;
