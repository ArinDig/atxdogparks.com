export interface DogPark {
  id: string;
  name: string;
  slug: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  leashPolicy: string;
  fees: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  features: string[];
  mainImage: string;
  images: string[];
  latitude: number;
  longitude: number;
}

