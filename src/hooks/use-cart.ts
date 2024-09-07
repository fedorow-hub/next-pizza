import debounce from 'lodash.debounce';
import { useCartStore } from '@/store/cart';
import React from 'react';
import { CreateCartItemValues } from '@/services/dto/cart';
import { CartStateItem } from '@/lib/get-cart-details';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (runFetch?: boolean): ReturnProps => {
  const cartState = useCartStore((state) => state);

  React.useEffect(() => {
    if (runFetch) {
      cartState.fetchCartItems();
    }
  }, []);

  return cartState;
};
