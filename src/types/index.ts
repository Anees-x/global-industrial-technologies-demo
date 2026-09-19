export interface ServiceItem {
  id: string;
  title: string;
  short: string;
  img: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  copy: string;
  img: string;
  scope?: string[];
}

export type SolutionItem = [string, string, string];

export interface ProductItem {
  id: string;
  name: string;
  type: string;
  img: string;
  specs: string[];
}

export type ProjectItem = [string, string, string, string, string?];

export type LanguageCode = 'en' | 'pt' | 'fr';

export type TranslationDictionary = Record<string, string>;
export type TranslationsMap = Record<string, TranslationDictionary>;
