import { TFormOrderData } from '@/components/shared/checkout/checkout-form-schema';
import { ApiRoutes } from './constants';
import { axiosInstance } from './instance';

export const createOrder = async (values: TFormOrderData) => {
  const { data } = await axiosInstance.post<string>(ApiRoutes.CREATE_ORDER, values);

  return data;
};