export interface Header {
  siteLogoUrl: string | null;
  siteTitle: string;
  siteDescription: string;
  favicon: string;
  headerMenuItems: HeaderMenuItems[];
}

export interface HeaderMenuItems {
  ID: number;
  title: string;
  url: string;
  children: any[];
  pageSlug: string;
  pageID: number
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  description: string;
  featured: boolean;
  manage_stock: boolean;
  stock_quantity: number;
  sku: string;
  categories: Category[];
  images: Image[];
  attributes: Attribute[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: Image;
}

export interface Attribute {
  id: number;
  name: string;
  position: number;
  options: string[];
}

export interface AttributeKey {
  id: number;
  name: string; 
  slug: string;
}

export interface AttributeValue {
  id: number;
  name: string;
  slug: string
  menu_order: number;
}

export interface Image {
  id: number;
  src: string;
  name: string;
  alt: string;
}