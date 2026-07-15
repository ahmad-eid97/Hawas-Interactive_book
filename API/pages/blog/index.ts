import type { IBlogDetails } from './types';
import { blogDetails, blogsList } from '@/staticData/pages/blog';

export const getBlogById = async (id: number): Promise<IBlogDetails | undefined> =>
  blogDetails[id] ?? blogsList[0] as IBlogDetails;

export const getBlogBySlug = async (slug: string): Promise<IBlogDetails | undefined> =>
  blogDetails[slug] ?? blogsList[0] as IBlogDetails;