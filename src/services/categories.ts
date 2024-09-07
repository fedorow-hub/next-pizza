import { axiosInstance } from './instance';
import {ApiRoutes} from './constants';
import { Category } from '../../models/product';

export const search = async (
  minPrice: Number | undefined,
  maxPrice: Number | undefined,
  sizes: Number[] | undefined,
  pizzaTypes: Number[] | undefined,
  ingredientsIdArr: Number[] | undefined  
): Promise<Category[]> => {
  const params: any = {};
  if (sizes) params.sizes = sizes.join(',');
  if (pizzaTypes) params.pizzaTypes = pizzaTypes.join(',');
  if (ingredientsIdArr) params.ingredients = ingredientsIdArr.join(',');
  params.minPrice = minPrice;
  params.maxPrice = maxPrice;
  const { data } = await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES, {params});
  return data;
};
