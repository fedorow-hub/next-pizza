'use client'

import { ChooseProductModal } from '@/components/shared/modals/choose-product-modal';
import { useProduct } from '@/hooks/use-product';
import { notFound } from 'next/navigation';

export default function ProductModalPage({ params: { id } }: { params: { id: string } }) {  
  console.log(id)
  const {product, loading} = useProduct(Number(id));
  
  /* if(product)
    console.log(product) */

  if(!loading && !product){
    return notFound();
  }

  if(product)
    return <ChooseProductModal product={product} />;
  return <></>
}

 /*  export default function ProductModalPage({ params: { id } }: { params: { id: string } }) {
    const {product, loading} = useProduct(Number(id));

    if(!loading)
      console.log(product)
    
    return <h1>модалка</h1>;
  } */
