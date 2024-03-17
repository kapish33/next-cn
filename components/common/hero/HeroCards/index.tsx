import React from 'react';
import { cource } from '..';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const HeroCard: React.FC<cource> = ({ heading, online }) => {
  return (
    <div className='flex items-center px-3 text-gray-800 dark:text-gray-200'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        aria-hidden='true'
        className='h-5 w-5 flex-shrink-0 '>
        <path
          fill-rule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z'
          clip-rule='evenodd'></path>
      </svg>
      <span className='ml-2 w-full flex justify-between border-b-2 pb-1'>
        <div>
          <div className='flex items-center'>
            <div
              className={cn(
                'px-2 py-1 rounded-full text-xs animate-pulse',
                online ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              )}>
              {online ? 'Online' : 'In Person'}
            </div>
          </div>

          <div>{heading}</div>
        </div>

        <Link className='my-auto' href={'/'}>
          <Button>Regester</Button>
        </Link>
      </span>
    </div>
  );
};
