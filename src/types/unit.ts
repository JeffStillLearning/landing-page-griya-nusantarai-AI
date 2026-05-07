export interface Unit {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  landSize: number;
  buildingSize: number;
  cluster: string;
  image: string;
  isReadyStock: boolean;
  rating: number;
}
