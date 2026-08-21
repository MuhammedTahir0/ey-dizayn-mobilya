export type Category =
  | 'Tümü'
  | 'Mutfak Dolapları'
  | 'Yatak Odası & Lambiri'
  | 'Giyinme Odası & Gardırop'
  | 'TV Ünitesi & Konsol'
  | 'Dresuar & Makyaj Masası';

export interface Project {
  id: string;
  title: string;
  category: Exclude<Category, 'Tümü'>;
  imageUrl: string;
  description: string;
  features?: string[];
  tag?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  badge: string;
  details: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string;
}
