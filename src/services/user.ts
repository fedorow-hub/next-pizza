import { User } from '../../models/user';
import { axiosInstance } from './instance';

export const getAll = async () => {
  const { data } = await axiosInstance.get<User[]>('/users');

  return data;
};

export const createUser = async (user: User) => {  
  const { data } = await axiosInstance.post('/users/', user );

  return data;
};

export const updateUser = async (id: number, user: any) => {
  const { data } = await axiosInstance.patch('/users/' + id,  user );

  return data;
};

export const removeUser = async (id: number) => {
  const { data } = await axiosInstance.delete('/carts/' + id);

  return data;
};