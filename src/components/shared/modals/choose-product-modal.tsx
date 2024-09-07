'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ProductForm } from './../';
import { useRouter } from 'next/navigation';
import { Product } from '../../../../models/product';

interface Props {
  product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  const onCloseModal = () => {
    router.back();
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={onCloseModal}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        <ProductForm product={product} onSubmit={() => router.back()}/>
      </DialogContent>
    </Dialog>
  );
};
