import { axiosInstance } from './instance';
import {ApiRoutes} from './constants';
import { Category } from '../../models/product';

export const search = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES);  
  return data;
};
