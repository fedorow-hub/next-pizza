'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
//import { Category } from '@prisma/client';
import React from 'react';

interface Props {
  /* items: Category[]; */
  /* items: any; */
  className?: string;
}

const cats = [
  {id: 1, name: 'Пиццы'},
  {id: 2, name: 'Комбо'},
  {id: 3, name: 'Закуски'},
  {id: 4, name: 'Коктейли'},
  {id: 5, name: 'Завтраки'}
];
/* const activeIndex = 0; */

export const Categories: React.FC<Props> = () => {
  const activeId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl')}>
      {cats.map(({name, id}, index) => (
        <a
          key={index}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}>
          {name}
        </a>
      ))}
    </div>
  );
};
