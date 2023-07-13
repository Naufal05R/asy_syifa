import React from 'react';

const Hero = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-y-8 lg:gap-y-12'>
      <h1 className='text-6xl font-bold sm:text-7xl sm:leading-tight lg:text-8xl lg:leading-none'>
        Ma&rsquo;had Tahfizh <br /> Asy-Syifa
      </h1>
      <p className='max-w-xs text-base font-medium sm:max-w-lg sm:text-lg lg:max-w-3xl lg:text-2xl'>
        Membentuk generasi bertakwa, berkarakter & berakhlak Qurani sesuai
        dengan pemahaman salafus sholeh
      </p>
      <div className='mt-12 inline-flex items-center text-base font-medium sm:text-lg lg:text-2xl'>
        <div className='w-fit select-none whitespace-nowrap rounded-xl bg-black text-white hover:brightness-200'>
          <button className='font-boldsm:text-xl w-fit p-4 text-lg lg:px-6 lg:text-2xl'>
            Kontak Ustadz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
