import { styles } from './styles';

import { Card, Figure, Hero, Stats } from '@/components';
import { supports } from '@/constants';

export default function Home() {
  return (
    <div className='relative flex flex-col text-center'>
      <Hero />

      <section
        className={`${styles.paddingY} -mt-12 w-full border-b border-t border-stone-200 bg-stone-100 md:-mt-24`}
      >
        <Stats />
      </section>

      <section className='mb-12 mt-12'>
        <h2 className='mb-16 text-xl font-bold sm:text-2xl lg:text-4xl'>
          Apa yang menarik?{' '}
          <span className='font-normal lg:text-2xl'>
            Kualifikasi tinggi dengan biaya terjangkau.
          </span>
        </h2>

        <article className={`-m-1 flex flex-wrap md:-m-2 ${styles.paddingX}`}>
          <Figure index={0} />
          <Figure index={1} />
        </article>
      </section>

      <section className='mb-12 mt-12'>
        <h2 className='mb-16 text-xl font-bold sm:text-2xl lg:text-4xl'>
          Ciptakan ekosistem pendidikan. Bangun generasi peradaban.
        </h2>

        <div className='mx-auto w-fit select-none rounded-xl bg-black p-4 neon-gray lg:px-6'>
          <h3 className='w-fit text-lg font-bold text-white sm:text-xl lg:text-2xl'>
            Penunjang kami
          </h3>
        </div>

        <div className='w-full py-24'>
          <article className={`-m-4 flex flex-wrap ${styles.paddingX}`}>
            {supports.map((item, index) => (
              <Card
                key={index}
                index={index}
                item={item}
              />
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}
