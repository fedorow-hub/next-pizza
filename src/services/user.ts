//import { User } from '../../models/user';
import { User } from '../../api/api';
import { axiosInstance } from './instance';

/* export const getAll = async () => {
  const { data } = await axiosInstance.get<User[]>('/users');

  return data;
}; */

export const createUser = async (user: User) => {  
  const { data } = await axiosInstance.post('/users/', user );

  return data;
};

/* export const updateUser = async (id: number, user: User) => {
  const { data } = await axiosInstance.put('/users/' + id,  user );

  return data;
}; */

export const removeUser = async (id: number) => {
  const { data } = await axiosInstance.delete<User[]>('/users/' + id);
  return data;
};