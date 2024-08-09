import { Ingredient } from '../../models/product';
import { ApiRoutes } from './constants';
import { axiosInstance } from './instance';

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>('/ingredients');

  return data;
};
