import { create } from 'zustand';
import { CartStateItem, getCartDetails } from '@/lib/get-cart-details';
import { Api } from '@/services/api-client';
import { CreateCartItemValues } from '@/services/dto/cart';



export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
  
  //получение товаров из корзины
  fetchCartItems: () => Promise<void>;
  //запрос на обновление количества товара
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  //Запрос на добавление товаров в корзину
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
  //Запрос на удаление товаров из корзины
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,
  removeCartItem: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.removeCartItem(id);      
      set(getCartDetails(data));
    } catch (error) {
      set({ error: true });
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
