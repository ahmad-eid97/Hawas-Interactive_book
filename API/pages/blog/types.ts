import type { BlogCategory } from "@/types";

export interface IBlogDetails {
  id: number;
  title: string;
  description: string;
  short_description: null;
  order: string;
  image: string;
  gallery: any[];
  features: any[];
  views: number;
  type: string;
  username: string;
  comments: any[];
  publish_date: string;
  meta_keywords: null;
  meta_description: null;
  category: BlogCategory;
  tags: any[];
}