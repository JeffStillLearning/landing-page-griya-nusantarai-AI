export type GalleryCategory = 'Fasad' | 'Interior' | 'Kawasan' | 'Fasilitas';

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: GalleryCategory;
}
