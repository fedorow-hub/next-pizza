'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { IProduct } from '@/hooks/use-choose-pizza';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { Product } from '../../../../models/product';

interface Props {
  product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  console.log(product)
  const isPizzaForm = Boolean(product.productItems[0].pizzaType);

  const onCloseModal = () => {
    router.back();
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={onCloseModal}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            items={product.productItems}
            onClickAdd={onCloseModal}
            ingredients={product.ingredients}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            items={product.productItems}
            onClickAdd={onCloseModal}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
