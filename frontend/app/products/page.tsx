const getProducts = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/products/", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <ul>
      {products.map((p: any) => (
        <li key={p.id}>
          {p.name} - ${p.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductsPage;
