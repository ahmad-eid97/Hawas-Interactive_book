import { Links, Link, Meta } from "../types";

export interface ServicesDataResponse {
  services: IService[];
  links: Links;
  meta: Meta;
}

export interface IService {
  id: number;
  title: string;
  icon: null;
  short_description: null;
  description: string;
  meta_keywords: null;
  meta_description: null;
  image: string;
  gallery: any[];
  features: any[];
  isFeatured: boolean;
  status: boolean;
  code: null;
  category: {
    id: number;
    image: string;
    isFeatured: boolean;
    status: boolean;
    code: null;
    name: string;
  };
  tags: ({
    id: number;
    name: string;
    slug: string;
    type: null;
    order_column: number;
    created_at: Date;
    updated_at: Date;
  })[];
}