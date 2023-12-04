export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  salePrice: string;
  promotionalPrice: string | null;
  quantity: number;
  visibility: boolean;
  featured: boolean;
  isNew: boolean;
  model: string | null;
  created_at: string;
  category: Category;
  style: Style;
  images: Image[];
  tags: Tag[];
  attributeValues: AttributeValue[];
  specificationImage: string | null;
}

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  billboard: string | null;
  order: number;
  products_count: number;
  products: Product[];
}

export type Style = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  billboard: string | null;
  order: number;
  products_count: number;
  products: Product[];
}

export type Attribute = {
  id: number;
  name: string;
  order: number;
  attribute_values: AttributeValue[];
}

export type AttributeValue = {
  id: number;
  name: string;
  slug: string;
  order: number;
  image: string | null;
  value: string | null;
  products_count: number;
  attribute: {
    name: string;
  }
}

export type Tag = {
  id: number;
  name: string;
}

export type Image = {
  id: number;
  image: string;
}

export type Slide = {
  id: number;
  desktopImage: string;
  mobileImage: string;
  title: string;
  order: number;
  description: string;
  label: string;
  action: string;
  position: string;
  color: string;
}

export type CartProduct = {
  id: string;
  quantity: number;
  price: number;
  total: string;
}

