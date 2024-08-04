//import { Ingredient, ProductItem } from '@prisma/client';

type Item = {
  /* productItem: ProductItem;
  ingredients: Ingredient[]; */
  productItem: any;
  ingredients: any;
  quantity: number;
};

export const calcCartItemTotalAmount = (item: Item): number => {
  return (
    (item.productItem.price +
      item.ingredients.reduce((acc: any, ingredient: any) => acc + ingredient.price, 0)) *
    item.quantity
  );
};
