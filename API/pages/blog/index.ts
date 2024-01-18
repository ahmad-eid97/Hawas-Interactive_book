import { cache } from 'react';
import API from "@/API/handlers";
//= Utils
import { generateLanguageHeader } from '..';
//= Types
import type { IBlogDetails } from './types';


export const getBlogById = cache(async (id: number) => {
  const response = await API.GET<IBlogDetails>(`/blogs/${id}`, { headers: generateLanguageHeader() });
  return (response.data.data as IBlogDetails);
});

export const getBlogBySlug = cache(async (slug: string) => {
  const response = await API.GET<IBlogDetails>(`/blogs/${slug}/slug`, { headers: generateLanguageHeader() });
  return (response?.data?.data as IBlogDetails);
});