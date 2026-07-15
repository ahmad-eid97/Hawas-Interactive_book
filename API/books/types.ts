export interface GetHightlightsResponse {
  highlights: HighlightsResponse;
}

export interface HighlightsResponse {
  current_page: number;
  data: HighlightData[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface HighlightData {
  id: number;
  description: string;
  student_id: number;
  page_section_id: number;
  created_at: string;
  updated_at: string;
  page_section?: PageSection;
  student?: Student;
}

export interface PageSection {
  id: number;
  is_translatable: boolean;
  is_active: number;
  type: string;
  layout: string;
  details: null;
  photo_file: string;
  video_link: null;
  audio_link: null;
  iframe: null;
  font_name: null;
  font_url: null;
  reference_link: null;
  reference: null;
  sort: number;
  quiz_id: null;
  book_page_id: number;
  country_id: null;
  city_id: null;
  created_by: null;
  updated_by: null;
  deleted_by: null;
  deleted_at: null;
  image_direction: string;
  title: string;
  description: null;
  translations: {
    id: number;
    is_translatable: number;
    locale: string;
    title: string;
    description: null;
    page_section_id: number;
    created_at: Date;
    updated_at: Date;
  }[];
  note: null;
  highlights: HighlightData[];
}

export interface Student {
  id: number;
  is_translatable: number;
  is_active: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  mobile: string;
  photo_file: string;
  social_media: string;
  birth_date: string;
  gender: string;
  level_id: number;
  school_class_id: number;
  semester_id: number;
  country_id: number;
  city_id: number;
  created_by: null;
  updated_by: null;
  deleted_by: null;
  deleted_at: null;
  school_id: null;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export interface StoreHighlightPayload {
  page_section_id: number;
  description: string;
}

export interface StoreHighlightResponse {
  page_section_id: string;
  description: string;
  student_id: number;
  updated_at: string;
  created_at: string;
  id: number;
}