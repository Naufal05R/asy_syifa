import { stats } from '@/constants';
import { ItemProps, StatsProps } from '@/types';
import React from 'react';

const StatItem = ({ item }: ItemProps) => {
  const { banner, text, subText } = item as StatsProps;
  return (
    <div>
      <h4 className='text-7xl font-semibold'>{banner}</h4>
      <h5 className='text-2xl font-medium'>{text}</h5>
      <p className='text-xl font-normal'>{subText}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <article className='flex flex-col w-full md:flex-row items-center justify-center gap-16'>
      {stats.map((item, index) => (
        <StatItem
          key={index}
          index={index}
          item={item}
        />
      ))}
    </article>
  );
};

export default Stats;
