import { Links, Link, Meta } from "../types";

export interface FaqDataResponse {
  faqs: FAQItem[];
  links: Links;
  meta: Meta;
}

export interface FAQItem {
  id: number;
  question: string | null;
  answer: string | null;
  meta_keywords: string | null;
  meta_description: string | null;
  order: string;
  status: boolean;
  category: FAQCategory;
}

export interface FAQCategory {
  id: number;
  is_translatable: boolean;
  image: string;
  isFeatured: boolean;
  order: string;
  status: boolean;
  deleted_at: null;
  name: string;
  meta_keywords: null;
  meta_description: null;
  translations: {
    id: number;
    locale: string;
    name: string;
    category_id: number;
    meta_keywords: null;
    meta_description: null;
  }[];
}