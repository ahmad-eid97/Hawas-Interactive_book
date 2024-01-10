export interface ICourse {
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
  category: {
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
  };
  reviews: any[];
  num_rates: number;
  num_reviews: number;
  avg_reviews: number;
}
