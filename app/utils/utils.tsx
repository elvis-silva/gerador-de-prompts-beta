'use client'


import pt from '@/i18n/pt.json'
import en from '@/i18n/en.json'
import { useParams } from 'next/navigation';

const dictionaries = { 'pt': pt, 'en': en };

export function useHomeDictionary() {
  const { lang } = useParams();
  return dictionaries[lang as keyof typeof dictionaries] ?? pt;
}