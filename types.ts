export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string; // Could be markdown or HTML
}

export interface CartItem extends Product {
  quantity: number;
}

// FIX: Added GalleryImage interface for use in the Slideshow component.
export interface GalleryImage {
  src: string;
  title: string;
  text: string;
}
