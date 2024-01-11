import { Links, Link, Meta } from "../types";

export interface MenuItem {
  id: number;
  label: string;
  link: string;
  parent: number;
  sort: number;
  class: null;
  menu: number;
  depth: number;
  created_at: string;
  updated_at: string;
  child: any[];
}


export interface SlidersDataResponse {
  sliders: Slider[];
  links: Links;
  meta: Meta;
}

export interface Slider {
  id: number;
  title: null;
  description: null;
  order: string;
  image: string;
  image2: null;
  background: null;
  icon: null;
  link: string;
  meta_keywords: null;
  meta_description: null;
}

export interface CategoriesDataResponse {
  categories: ICategory[];
  links: Links;
  meta: Meta;
}

export interface ICategory {
  id: number;
  image: string;
  isFeatured: boolean;
  status: boolean;
  code: null;
  name: string;
}

export interface CoursesDataResponse {
  courses: Course[];
  links: Links;
  meta: Meta;
}

export interface Course {
  id: number;
  title: string;
  summary: string;
  overview: string;
  instructor_details: string;
  meta_keywords: null;
  meta_description: null;
  images: string[];
  course_duration: string;
  current_price: number;
  previous_price: number;
  course_video: string;
  instructor_name: string;
  instructor_occupation: string;
  category: CourseCategory;
  num_rates: number;
  num_reviews: number;
  avg_reviews: number;
}

export interface CourseCategory {
  id: number;
  is_translatable: boolean;
  status: boolean;
  order: string;
  deleted_at: null;
  name: string;
  meta_keywords: null;
  meta_description: null;
  translations: {
    id: number;
    locale: string;
    name: string;
    meta_keywords: null;
    meta_description: null;
    course_category_id: number;
    created_at: Date;
    updated_at: Date;
  }[];
}



export interface EventsDataResponse {
  events: IEvent[];
  links: Links;
  meta: Meta;
}

export interface IEvent {
  id: number;
  title: string;
  content: string;
  organizer: string;
  venue: string;
  venue_location: string;
  meta_keywords: null;
  meta_description: null;
  image: string;
  date: Date;
  time: string;
  ticket_cost: number;
  available_ticket_num: number;
  organizer_email: string;
  organizer_phone: string;
  organizer_website: string;
  venue_phone: string;
  category: EventCategory;
}

export interface EventCategory {
  id: number;
  name: string;
  meta_keywords: null;
  meta_description: null;
  status: boolean;
}



export interface GalleriesDataResponse {
  galleries: GalleryItem[];
  links: Links;
  meta: Meta;
}

export interface GalleryItem {
  id: number;
  title: string;
  meta_keywords: null;
  meta_description: null;
  images: string[];
  code: null;
  category: GalleryCategory;
}

export interface GalleryCategory {
  id: number;
  name: string;
  meta_keywords: null;
  meta_description: null;
  status: boolean;
}


export interface GalleriesCategoriesDataResponse {
  categories: GalleryCategory[];
  links: Links;
  meta: Meta;
}


export interface BlogsDataResponse {
  blogs: Blog[];
  links: Links;
  meta: Meta;
}

export interface Blog {
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

export interface BlogCategory {
  id: number;
  image: string;
  isFeatured: boolean;
  status: boolean;
  code: null;
  name: string;
}


export interface FooterLinksResponse {
  current_page: number;
  data: FooterItem[];
  first_page_url: string;
  from: null;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: null;
  total: number;
}

export interface FooterItem {
  id: number;
  is_translatable: boolean;
  url: string;
  deleted_at: null;
  name: null;
  meta_keywords: null;
  meta_description: null;
  translations: {
    id: number;
    locale: string;
    name: string;
    meta_keywords: null;
    meta_description: null;
    userful_link_id: number;
    created_at: Date;
    updated_at: Date;
  }[];
}

export interface FooterSocialLinks {
  id: number;
  is_translatable: boolean;
  footer_image: string;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  footer_text: string;
  footer_newsletter_text: string;
  copy_right: string;
  meta_keywords: null;
  meta_description: null;
  translations: {
    id: number;
    locale: string;
    footer_text: string;
    footer_newsletter_text: string;
    copy_right: string;
    meta_keywords: null;
    meta_description: null;
    footer_id: number;
    created_at: Date;
    updated_at: Date;
  }[];
}

export interface SettingsResponse {
  id: number;
  key: string;
  plain_value: null | string;
  is_translatable: boolean;
  value: null;
  meta_keywords: null;
  meta_description: null;
}

export interface NewsletterResponse {
  id: string;
  email_address: string;
  unique_email_id: string;
  contact_id: string;
  full_name: string;
  web_id: number;
  email_type: string;
  status: string;
  consents_to_one_to_one_messaging: boolean;
  merge_fields: {
    FNAME: string;
    LNAME: string;
    ADDRESS: string;
    PHONE: string;
    BIRTHDAY: string;
  };
  stats: {
    avg_open_rate: number;
    avg_click_rate: number;
  };
  ip_signup: string;
  timestamp_signup: string;
  ip_opt: string;
  timestamp_opt: Date;
  member_rating: number;
  last_changed: Date;
  language: string;
  vip: boolean;
  email_client: string;
  location: {
    latitude: number;
    longitude: number;
    gmtoff: number;
    dstoff: number;
    country_code: string;
    timezone: string;
    region: string;
  };
  source: string;
  tags_count: number;
  tags: any[];
  list_id: string;
  _links: {
    rel: string;
    href: string;
    method: string;
    targetSchema?: string;
    schema?: string;
  }[];
}


export interface WhyChooseUsResponse {
  id: number;
  type: "why_choose_us";
  key: string;
  value: WhyChooseUsValueElement[] | number | null | string;
  meta_keywords: null;
  meta_description: null;
}

export interface WhyChooseUsValueElement {
  title: null;
  description: null;
  icon: null;
}

export interface CounterItem {
  id: number;
  type: "counter_success";
  key: string;
  value: CounterValueElement[] | number | null | string;
  meta_keywords: null;
  meta_description: null;
}

export interface CounterValueElement {
  title: string;
  counter: string;
  icon: string;
}

export interface ExperienceSectionData {
  id: number;
  type: 'experience';
  key: string;
  value: number | null | string;
  meta_keywords: null;
  meta_description: null;
}