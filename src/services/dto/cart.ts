//import { Cart, CartItem, Ingredient, Product, ProductItem } from '@prisma/client';

/* export type CartItemDTO = CartItem & {
  productItem: ProductItem & { product: Product; ingredients: Ingredient[] };
  ingredients: Ingredient[];
};

export type CartResponse = Cart & {
  items: CartItemDTO[];
};

export interface CreateCartItemValues {
  productItemId: number;
  pizzaSize?: number;
  type?: number;
  ingredientsIds?: number[];
  quantity: number;
}
 */

export type CartItemDTO = any & {
  productItem: any & { product: any; ingredients: any[] };
  ingredients: any[];
};

export type CartResponse = any & {
  items: CartItemDTO[];
};

export interface CreateCartItemValues {
  productItemId: number;
  pizzaSize?: number;
  type?: number;
  ingredientsIds?: number[];
  quantity: number;
}
