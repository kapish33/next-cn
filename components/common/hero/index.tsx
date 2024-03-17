import { assets } from '@/assets';
import Image from 'next/image';
import { HeroCard } from '@/components/common/hero/HeroCards';

export interface cource {
  heading: string;
  online: boolean;
  location?: string;
  venue?: string;
}

interface Hero {
  title: string;
  cources: cource[];
}
const HeroCources: React.FC<Hero> = ({ title, cources }) => {
  return (
    <section className='bg-base-white dark:bg-gray-900'>
      <div className='container mx-auto flex flex-col space-y-6 px-6 py-10 lg:flex-row lg:items-center lg:py-16'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
              {title}
            </h1>
            <div className='lg:max-w-lg'>
              <div className='mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
                {cources.map((service) => (
                  <HeroCard key={service.heading} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex h-96 w-full items-center justify-center lg:w-1/2'>
          <Image
            className='mx-auto object-contain'
            src={assets.main.hero}
            alt={'Hero image'}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCources;
