import type { ContactFormPayload, ContactFormReponse } from './types';

export const sendContactForm = async (_payload: ContactFormPayload): Promise<{ success: boolean; message: string; data: ContactFormReponse | null }> => ({
  success: true,
  message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
  data: null,
});