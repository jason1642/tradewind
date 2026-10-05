export interface ProductTypes {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}
