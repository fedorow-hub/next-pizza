import { cn } from '@/lib/utils';
import React from 'react';
import debounce from 'lodash.debounce';
import { CountButton } from './count-button';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { CartState } from '@/store/cart';
import { Trash2Icon } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import * as CartItem from './cart-item-details';

interface Props extends CartItemProps {  
  className?: string;
}

export const DrawerCartItem: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
  details,
  className,
}) => {
  const { updateItemQuantity, removeCartItem } = useCart();

  const onClickCountButton = (type: 'plus' | 'minus') => {
    updateItemQuantity(id, type === 'plus' ? quantity + 1 : quantity - 1);
  };

  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <CartItem.CartItemDetailsImage src={imageUrl} />

      <div className="flex-1">
        <CartItem.CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItem.CartItemDetailsPrice value={price} />
            <Trash2Icon
              onClick={() => removeCartItem(id)}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
