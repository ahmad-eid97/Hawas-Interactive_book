import { cache } from 'react';
import API from "@/API/handlers";
//= Types
import type { IBlogDetails } from './types';


export const getBlogById = cache(async (id: number) => {
  const response = await API.GET<IBlogDetails>(`/blogs/${id}`, { headers: { 'Accept-Language': 'ar' } });
  return (response.data.data as IBlogDetails);
});