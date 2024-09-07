
import { cn } from '@/lib/utils';
import React from 'react';
import { WhiteBlock } from './white-block';
import { Button } from '../ui/button';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { ChecoutItemDetails } from './checkout-item-details';

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
  totalAmount: number;
  className?: string;
  submitting?: boolean;
}

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  className,
  submitting,
}) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className="text-4xl font-extrabold">{totalPrice} ₽</span>
      </div>

      <ChecoutItemDetails title={
        <div className='flex items-center'>
            <Package size={18} className='mr-2 text-gray-300'/>
            Стоимость корзины:
        </div>
        } value={totalAmount.toString()}/>
      <ChecoutItemDetails title={
        <div className='flex items-center'>
            <Percent size={18} className='mr-2 text-gray-300'/>
            Налоги:
        </div>
        } value={vatPrice.toString()}/>
      <ChecoutItemDetails title={
        <div className='flex items-center'>
            <Truck size={18} className='mr-2 text-gray-300'/>
            Доставка:
        </div>
        } value={DELIVERY_PRICE.toString()}/>
        
      <Button
        type="submit"
        disabled={!totalAmount || submitting}
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
