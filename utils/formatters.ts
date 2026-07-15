import { format as formatter } from 'date-fns';
import * as Locales from 'date-fns/locale';

const locales = {
  ...Locales,
  en: Locales.enUS
}

export const currencyFormatter = (options?: CurrencyOptions) => new Intl.NumberFormat(options?.locale || 'en', {
  style: 'currency',
  currency: options?.currency || 'ILS'
});

export const numberFormatter = (options?: NumbersOptions) => new Intl.NumberFormat(options?.locale || 'en', { notation: options?.isCompact ? 'compact' : 'standard' });

export function dateFormatter({ date, format = 'yyyy-MM-dd | hh:mm a', locale = 'en' }: DateFormatterOptions) {
  // @ts-ignore
  if (!date || isNaN(new Date(date))) {
    return "N/A";
  }

  return formatter(new Date(date), format, { locale: locales[locale as keyof typeof locales] || Locales.enUS })
}

type CurrencyOptions = {
  locale?: string | undefined;
  currency?: string | undefined;
}

type NumbersOptions = {
  locale?: string | undefined;
  isCompact?: boolean;
}




type DateFormatterOptions = {
  date: string;
  format?: string;
  locale?: string;
}