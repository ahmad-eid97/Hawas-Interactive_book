import { Links, Link, Meta } from "../types";

export interface PartnersDataResponse {
  partners: any[];
  links: Links;
  meta: Meta;
}

export interface TestimonialsDataResponse {
  testimonials: Testimonial[];
  links: Links;
  meta: Meta;
}

export interface Testimonial {
  id: number;
  title: string;
  job: string;
  image: string;
  description: string;
}

export interface AboutSectionData {
  id: number;
  type: "about";
  key: string;
  value: AboutSectionValueElement[] | number | null | string;
  meta_keywords: null;
  meta_description: null;
}

export interface AboutSectionValueElement {
  title: null | string;
  percentage: null | string;
}