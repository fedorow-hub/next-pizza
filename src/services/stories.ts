import { axiosInstance } from './instance';

/* export type IStory = Story & {
  items: StoryItem[];
}; */

export type IStory = any & {
    items: any;
};

export const getAll = async () => {
  const { data } = await axiosInstance.get<IStory[]>('/stories');

  return data;
};
