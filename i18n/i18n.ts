import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const localeCookie = cookies().get('locale');
  const locale = localeCookie ? localeCookie.value : 'en';
 
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});

export function setLanguage(language: string) {
  document.cookie = `locale=${language}; path=/`;
  localStorage.setItem('language', language);
  window.location.reload();
}