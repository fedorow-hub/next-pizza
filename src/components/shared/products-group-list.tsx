'use client';

import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-cart';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';
import { Product } from '../../../models/product';

interface Props {
  title: string;
  items: Product[];
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
  const setActiveId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div ref={intersectionRef} className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items
          .filter((product: Product) => product.productItems?.length > 0)
          .map((product: Product, i: any) => (
            <ProductCard
              key={i}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.productItems[0].price}
            />
          ))}
      </div>
    </div>
  );
};
