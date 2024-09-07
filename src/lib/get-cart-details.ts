import { CartResponse } from '@/services/dto/cart';
import { calcCartItemTotalAmount } from './calc-cart-item-total-amount';
import { CartItem } from '../../models/cart';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  disabled?: boolean;
  price: number;
  size?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

type ReturnProps = {
  items: CartStateItem[];
  totalAmount: number;
};

//TODO снабдить все функции комментариями
export const getCartDetails = (data: CartResponse): ReturnProps => { 
  const items = data.cartItems.map((item: CartItem) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemTotalAmount(item),
    size: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    disabled: false,
    ingredients: item.ingredients.map((ingredient: any) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })) as CartStateItem[];

  return { items, totalAmount: data.totalAmount || 0 };
};
