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
  /** ISO date (YYYY-MM-DD) of the last real content change. Feeds sitemap lastmod.
   *  Set this when a park's content is actually updated; leave unset otherwise. */
  lastUpdated?: string;
}

