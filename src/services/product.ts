import { axiosInstance } from './instance';
import {ApiRoutes} from './constants';
import { Product } from '../../models/product';

export const search = async (id: number): Promise<Product> => {  
  const { data } = await axiosInstance.get<Product>(ApiRoutes.GET_PRODUCT + id);
  return data;
};
