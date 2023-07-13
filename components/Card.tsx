import { ItemProps, supportsProps } from '@/types';
import Link from 'next/link';

const Card = ({ item }: ItemProps) => {
  const { category, performer, description } = item as supportsProps;
  return (
    <section className='p-4 max-lg:mx-auto lg:w-1/3'>
      <Link
        href='/'
        className='relative flex h-full flex-col justify-between gap-16 overflow-hidden rounded-lg bg-neutral-100 bg-opacity-75 px-8 pb-6 pt-10 text-left hover:shadow-lg transition duration-500'
      >
        <h5 className='title-font mb-1 text-xs font-medium tracking-widest text-neutral-400'>
          {category}
        </h5>
        <div>
          <h4 className='title-font mb-3 text-xl font-semibold sm:text-2xl'>
            {performer}
          </h4>
          <p className='mb-3 leading-relaxed'>{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
