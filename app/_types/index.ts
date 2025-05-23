export interface Product {
  id: string;
  name?: string;
  title?: string;
  image: string;
  alias: string;
}

export interface ProductDetail {
  title: string;
  description: string;
  categories: string;
  fabric_number: string;
  main_photo: string;
  is_new: string;
  photo_gallery: {
    thumb: string[];
    orig: string[];
  };
  product_code: string;
  tip_vozila: string;
  metatag: {
    title: string;
    description: string;
  };
  similar_products?: Product[];
}

export interface ProductDetailsProps {
  productDetails: ProductDetail;
}

export interface SimilarProductsProps {
  similarProducts: Product[];
}
