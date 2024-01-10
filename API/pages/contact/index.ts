import { cache } from 'react';
import API, { type Response } from "@/API/handlers";
import axios from '@/utils/axios';
//= Types
import type { ContactFormPayload, ContactFormReponse } from './types';

export const sendContactForm = cache(async (payload: ContactFormPayload) => {
  const response = await axios.post<Response<ContactFormReponse>>('/contacts', payload);
  return response.data;
});