'use client'

import { ChooseProductModal } from '@/components/shared';
import { useProduct } from '@/hooks/use-product';
import { notFound } from 'next/navigation';

export default function ProductModalPage({ params: { id } }: { params: { id: string } }) {  
  const {product, loading} = useProduct(Number(id));
  
  if(!loading && !product){
    return notFound();
  }

  if(product)
    return <ChooseProductModal product={product} />;
  return <></>
}
