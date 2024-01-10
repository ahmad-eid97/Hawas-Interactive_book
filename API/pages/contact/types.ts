export interface ContactFormPayload {
  form_title: string;
  form_subtitle: string;
  phone_number: string;
  email: string;
  name: string;
}

export interface ContactFormReponse {
  phone_number: string;
  email: string;
  id: number;
  form_title: string;
  form_subtitle: string;
  address: string;
  meta_keywords: null;
  meta_description: null;
  translations: {
    locale: string;
    form_title: string;
    form_subtitle: string;
    address: string;
    contact_id: number;
    updated_at: Date;
    created_at: Date;
    id: number;
  }[];
}