import axios from 'axios';
import { Client } from '../../api/api';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
});

export const apiClient = new Client('http://localhost:5068');