import Link from "next/link";
import { getProducts } from "@/lib/api/product";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="max-w-4xl mx-auto p-6 bg-amber-50">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.category?.name}</p>
            <p className="mt-2 font-medium">${product.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
