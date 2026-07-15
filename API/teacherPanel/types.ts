export interface NewQuizPayload {
  title: string;
  description: string;
  school_id: number;
  school_class_id: number;
  _method?: string;
}

export interface NewQuestionPayload {
  quiz_id: string;
  parent_id: string;
  question_type: string;
  title: string;
  description: string;
  question_mark: string;
  question_img: string;
  is_active: string;
  question_category: string;
  _method?: string;
}