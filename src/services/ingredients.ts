//import { Ingredient } from '@prisma/client';
import { axiosInstance } from './instance';

export const getAll = async () => {
  const { data } = await axiosInstance.get<any>('/ingredients');

  return data;
};
