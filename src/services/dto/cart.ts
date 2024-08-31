import { Ingredient, Product, ProductItem } from './../../../models/product';
import { Cart, CartItem, } from './../../../models/cart';

export type CartItemDTO = CartItem & {
  productItem: ProductItem & { product: Product; ingredients: Ingredient[] };
  ingredients: Ingredient[];
};

export type CartResponse = Cart & {
  items: CartItemDTO[];
};

export interface CreateCartItemValues {
  productItemId: number;
  ingredientsIds?: number[];
}
