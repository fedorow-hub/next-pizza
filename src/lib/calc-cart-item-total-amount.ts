import { Ingredient, ProductItem } from './../../models/product';

type Item = {
  productItem: ProductItem;
  ingredients: Ingredient[];
  quantity: number;
};

/**
 * Функция для подсчета общей стоимости выбранного типа продукта с дополнительными ингредиентами
 * @param item ProductItem, включающий в себя разновидность продукта и дополнительных ингредиентов
 * @returns общая стоимость продукта с доп.ингредиентами
 */
export const calcCartItemTotalAmount = (item: Item): number => {
  return (
    (item.productItem.price +
      item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)) *
    item.quantity
  );
};
