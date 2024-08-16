'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  items: any;
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  


  return (
    <div className={className} id={title}>      
        <nav>
        <Link href={`/product/1`}>
          

          <p className="text-sm text-gray-400">
            Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
              от <b>100 ₽</b>
            </span>

          </div>
        </Link>
      </nav>    
    </div>
  );
};
