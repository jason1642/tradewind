const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category: { id: number; name: string; slug: string } | null;
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getOneProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
